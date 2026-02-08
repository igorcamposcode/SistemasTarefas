require('dotenv').config();

// Validação de segurança: Verificar JWT_SECRET_CURRENT
try {
  const jwtKeyRotation = require('./utils/jwtKeyRotation');
  const status = jwtKeyRotation.getRotationStatus();
  if (process.env.NODE_ENV !== 'production') {
    console.log('Sistema JWT:', status.message);
  }
} catch (error) {
  console.error('❌ ERRO CRÍTICO:', error.message);
  process.exit(1);
}

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const subtarefaRoutes = require('./routes/subtarefaRoutes');
const documentoRoutes = require('./routes/documentoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:4200').split(',').map(o => o.trim());

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(null, false);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Content-Length"],
  credentials: true
}));

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Muitas tentativas. Tente novamente em 15 minutos.' }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/login', authLimiter);
app.use('/api/cadastro', authLimiter);
app.use('/api/recuperar-senha', authLimiter);

app.use('/api', authRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/tarefa', tarefaRoutes);
app.use('/api/tarefa', subtarefaRoutes);
app.use('/api/documento', documentoRoutes);

// Endpoint de diagnóstico JWT (apenas desenvolvimento)
if (process.env.NODE_ENV !== 'production') {
  app.get('/api/jwt-status', (req, res) => {
    const jwtKeyRotation = require('./utils/jwtKeyRotation');
    const status = jwtKeyRotation.getRotationStatus();
    res.json({
      status: 'ok',
      jwtRotation: status,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    });
  });
}

const isProduction = process.env.NODE_ENV === 'production';
sequelize.sync({ alter: !isProduction })
  .then(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log("Banco de dados sincronizado.");
      app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
    } else {
          // In production we avoid verbose stdout; start server silently
          app.listen(PORT);

          // Agendar rotação de JWT se habilitado (apenas em ambientes seguros)
          try {
            const jwtCron = require('./cron/jwtRotationCron');
            jwtCron.scheduleIfEnabled();
          } catch (err) {
            console.error('Erro ao inicializar job de rotação JWT:', err.message || err);
          }
    }
  })
  .catch((err) => console.error("Erro ao sincronizar banco:", err));
