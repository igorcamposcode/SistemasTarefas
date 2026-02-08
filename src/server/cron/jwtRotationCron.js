const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

/**
 * Job seguro de rotação de chaves JWT.
 * - Ativado apenas se ROTATE_JWT_CRON_ENABLE=true
 * - Em ambientes não-produtivos atualiza src/server/.env com backup e atualiza process.env
 * - Em produção NÃO realiza escrita no filesystem; espera integração com Secrets Manager
 */

const ENV_PATH = path.join(__dirname, '..', '.env');
const BACKUP_DIR = path.join(__dirname, '..', 'env-backups');

function generateKey() {
  return crypto.randomBytes(32).toString('hex');
}

function safeWriteEnv(updates) {
  // Cria backup
  try {
    if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(BACKUP_DIR, `.env.bak.${ts}`);
    if (fs.existsSync(ENV_PATH)) {
      fs.copyFileSync(ENV_PATH, backupPath);
    }

    // Ler .env atual (se existir)
    const content = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, 'utf8') : '';
    const lines = content.split(/\r?\n/).filter(Boolean);

    const envMap = {};
    lines.forEach(l => {
      const idx = l.indexOf('=');
      if (idx > 0) {
        const key = l.substring(0, idx).trim();
        const val = l.substring(idx + 1);
        envMap[key] = val;
      }
    });

    // Aplicar atualizações
    Object.keys(updates).forEach(k => envMap[k] = updates[k]);

    // Reescrever .env com preservação de chaves conhecidas
    const output = Object.keys(envMap).map(k => `${k}=${envMap[k]}`).join('\n') + '\n';

    // Escrita atômica
    const tmpPath = ENV_PATH + '.tmp';
    fs.writeFileSync(tmpPath, output, { mode: 0o600 });
    fs.renameSync(tmpPath, ENV_PATH);

    // Atualiza process.env para sessão atual
    Object.keys(updates).forEach(k => process.env[k] = updates[k]);
    return true;
  } catch (err) {
    console.error('Erro ao escrever .env durante rotação JWT:', err);
    return false;
  }
}

function rotateJwtLocal() {
  const current = process.env.JWT_SECRET_CURRENT || '';
  const previous = process.env.JWT_SECRET_PREVIOUS || '';

  const newKey = generateKey();

  const updates = {
    JWT_SECRET_PREVIOUS: current || previous,
    JWT_SECRET_CURRENT: newKey
  };

  const ok = safeWriteEnv(updates);
  if (!ok) {
    console.error('Rotação JWT falhou ao atualizar .env');
    return;
  }

  // Nota: módulos que leem process.env nas chamadas de runtime já verão a nova chave.
  if (process.env.NODE_ENV !== 'production') {
    // Log sucinto apenas em dev/staging
    console.log('Rotação JWT executada com sucesso (ambiente de teste).');
  }
}

function scheduleIfEnabled() {
  const enabled = (process.env.ROTATE_JWT_CRON_ENABLE || 'false').toLowerCase() === 'true';
  if (!enabled) return;

  const schedule = process.env.JWT_ROTATION_SCHEDULE || '0 0 * * 0'; // semanalmente

  // Em produção não executamos rotações via arquivo; é responsabilidade do Secrets Manager
  if (process.env.NODE_ENV === 'production') {
    console.error('ROTATE_JWT_CRON_ENABLE=true em produção, porém rotação automatizada via filesystem não é segura. Configure um Secrets Manager.');
    return;
  }

  try {
    cron.schedule(schedule, () => {
      rotateJwtLocal();
    });
  } catch (err) {
    console.error('Erro ao agendar rotação JWT:', err);
  }
}

module.exports = { scheduleIfEnabled, rotateJwtLocal };
