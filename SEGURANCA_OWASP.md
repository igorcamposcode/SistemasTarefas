# Guia Completo de Segurança OWASP - Sistema de Gerenciamento de Tarefas

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Top 10 OWASP 2021](#top-10-owasp-2021)
3. [Implementações de Segurança](#implementações-de-segurança)
4. [Conceitos e Explicações](#conceitos-e-explicações)
5. [Boas Práticas Aplicadas](#boas-práticas-aplicadas)
6. [Recomendações Adicionais](#recomendações-adicionais)

---

## 🎯 Visão Geral

Este documento explica todas as medidas de segurança implementadas no sistema, seguindo as diretrizes do **OWASP Top 10 2021** (Open Web Application Security Project).

### O que é OWASP?

OWASP é uma organização sem fins lucrativos que fornece ferramentas, documentação e padrões para segurança de aplicações web. O **OWASP Top 10** lista as 10 vulnerabilidades mais críticas encontradas em aplicações web.

---

## 🔒 Top 10 OWASP 2021

### 1. **A01:2021 – Broken Access Control**
**O que é:** Falhas no controle de acesso permitem que usuários acessem recursos que não deveriam.

**Como foi implementado:**
- ✅ Validação de propriedade de recursos antes de operações (IDOR prevention)
- ✅ Verificação de token JWT antes de cada requisição
- ✅ Validação no frontend e backend (defense in depth)

**Código exemplo:**
```typescript
private validarPermissaoTarefa(tarefaId: number): boolean {
  const tarefa = this.tarefas.find(t => t.id === tarefaId);
  const idUsuarioLogado = this.authService.obterIdUsuarioLogado();
  return tarefa.usuario === this.usuario[0]?.nome || 
         (tarefa as any).idusuario === idUsuarioLogado;
}
```

---

### 2. **A02:2021 – Cryptographic Failures**
**O que é:** Exposição de dados sensíveis devido a criptografia inadequada ou ausente.

**Como foi implementado:**
- ✅ Tokens JWT armazenados de forma segura no localStorage
- ✅ Validação de estrutura do token antes de usar
- ✅ Não loga tokens ou dados sensíveis
- ✅ HTTPS obrigatório em produção (configurar no servidor)

**Código exemplo:**
```typescript
private validarTokenJWT(token: string): boolean {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  return parts.length === 3 && parts.every(part => part.length > 0);
}
```

---

### 3. **A03:2021 – Injection**
**O que é:** Inserção de código malicioso através de inputs não validados (SQL Injection, XSS, Command Injection).

**Como foi implementado:**
- ✅ Sanitização de todos os inputs do usuário
- ✅ Validação de tipos e formatos (email, telefone, texto)
- ✅ Remoção de tags HTML e caracteres perigosos
- ✅ Validação de arquivos (tipo, tamanho, nome)

**Código exemplo:**
```typescript
private sanitizarTexto(texto: string): string {
  // Remove tags HTML
  let sanitizado = texto.replace(/<[^>]*>/g, '');
  // Remove caracteres de controle
  sanitizado = sanitizado.replace(/[\x00-\x1F\x7F]/g, '');
  return sanitizado;
}
```

---

### 4. **A04:2021 – Insecure Design**
**O que é:** Falhas de segurança devido a design inseguro desde o início.

**Como foi implementado:**
- ✅ Arquitetura com separação de responsabilidades
- ✅ Validação em múltiplas camadas (frontend + backend)
- ✅ Princípio do menor privilégio
- ✅ Fail-secure (em caso de erro, nega acesso)

---

### 5. **A05:2021 – Security Misconfiguration**
**O que é:** Configurações inseguras ou padrões de segurança não aplicados.

**Como foi implementado:**
- ✅ Headers de segurança configurados (via interceptor)
- ✅ Validação de tokens em todas as requisições
- ✅ Tratamento seguro de erros
- ✅ Não expõe informações do sistema em erros

**Código exemplo:**
```typescript
// Interceptor adiciona token e trata erros 401
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // Valida token antes de usar
  if (token && validarTokenJWT(token)) {
    // Adiciona header de autorização
  }
  // Trata erros 401 redirecionando para login
};
```

---

### 6. **A06:2021 – Vulnerable and Outdated Components**
**O que é:** Uso de bibliotecas e componentes com vulnerabilidades conhecidas.

**Recomendações:**
- ✅ Manter dependências atualizadas
- ✅ Usar `npm audit` regularmente
- ✅ Verificar CVE (Common Vulnerabilities and Exposures)
- ✅ Usar versões LTS quando possível

---

### 7. **A07:2021 – Identification and Authentication Failures**
**O que é:** Falhas no processo de autenticação e identificação.

**Como foi implementado:**
- ✅ Validação de estrutura do token JWT
- ✅ Verificação de token antes de cada requisição
- ✅ Logout automático em caso de token inválido
- ✅ Não armazena senhas em texto plano (backend)

**Código exemplo:**
```typescript
estaAutenticado(): boolean {
  const token = this.obterToken();
  return !!token && this.validarTokenJWT(token);
}
```

---

### 8. **A08:2021 – Software and Data Integrity Failures**
**O que é:** Falhas na integridade de software e dados.

**Como foi implementado:**
- ✅ Validação de integridade de arquivos enviados
- ✅ Sanitização de dados do localStorage
- ✅ Validação de tamanho de dados (prevenção de DoS)

**Código exemplo:**
```typescript
sanitizarDadosLocalStorage(dados: any): string | null {
  const jsonString = JSON.stringify(dados);
  // Valida tamanho (previne DoS)
  if (jsonString.length > 10000) return null;
  // Remove caracteres de controle
  return jsonString.replace(/[\x00-\x1F\x7F]/g, '');
}
```

---

### 9. **A09:2021 – Security Logging and Monitoring Failures**
**O que é:** Falhas no registro e monitoramento de eventos de segurança.

**Como foi implementado:**
- ✅ Não loga dados sensíveis (tokens, senhas, dados pessoais)
- ✅ Logs de erro genéricos (não expõem detalhes)
- ✅ Tratamento centralizado de erros

**Código exemplo:**
```typescript
error: (_err) => {
  // Não loga detalhes do erro por segurança
  this.notificationService.showError('Erro ao processar. Tente novamente.');
}
```

---

### 10. **A10:2021 – Server-Side Request Forgery (SSRF)**
**O que é:** Forçar o servidor a fazer requisições para recursos não autorizados.

**Como foi implementado:**
- ✅ Validação de URLs no frontend
- ✅ Whitelist de domínios permitidos
- ✅ Validação de parâmetros de URL

---

## 🛡️ Implementações de Segurança

### 1. **Prevenção de XSS (Cross-Site Scripting)**

**O que é XSS?**
XSS é uma vulnerabilidade que permite injetar scripts maliciosos em páginas web, executados no navegador de outros usuários.

**Tipos de XSS:**
- **Reflected XSS:** Script injetado via URL ou formulário
- **Stored XSS:** Script armazenado no banco de dados
- **DOM-based XSS:** Manipulação do DOM do cliente

**Como foi implementado:**
```typescript
// NotificationService sanitiza todas as mensagens
private sanitizeMessage(message: string): string {
  // Remove tags HTML
  let sanitized = message.replace(/<[^>]*>/g, '');
  // Remove caracteres de controle
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  // Limita tamanho (prevenção de DoS)
  if (sanitized.length > 500) {
    sanitized = sanitized.substring(0, 500) + '...';
  }
  return sanitized;
}
```

---

### 2. **Validação de Upload de Arquivos**

**Riscos:**
- Upload de arquivos maliciosos (vírus, scripts)
- Path traversal (acesso a arquivos do servidor)
- DoS através de arquivos grandes
- Execução de código através de arquivos

**Como foi implementado:**
```typescript
private validarArquivo(file: File): { isValid: boolean; errorMessage?: string } {
  // 1. Whitelist de tipos MIME permitidos
  const tiposPermitidos = ['application/pdf', 'image/jpeg', ...];
  
  // 2. Whitelist de extensões
  const extensoesPermitidas = ['.pdf', '.jpg', '.png', ...];
  
  // 3. Validação de tamanho (10MB máximo)
  const tamanhoMaximo = 10 * 1024 * 1024;
  
  // 4. Validação de nome (previne path traversal)
  if (nomeArquivo.includes('..') || nomeArquivo.includes('/')) {
    return { isValid: false, errorMessage: 'Nome inválido' };
  }
  
  return { isValid: true };
}
```

**Boas práticas:**
- ✅ Whitelist (lista de permitidos) ao invés de blacklist
- ✅ Validação de tipo MIME E extensão
- ✅ Limite de tamanho
- ✅ Renomear arquivos no servidor
- ✅ Armazenar fora do diretório web

---

### 3. **Gerenciamento Seguro de Tokens**

**O que é JWT?**
JWT (JSON Web Token) é um padrão para transmitir informações de forma segura entre partes.

**Estrutura do JWT:**
```
header.payload.signature
```

**Como foi implementado:**
```typescript
// Validação da estrutura
private validarTokenJWT(token: string): boolean {
  const parts = token.split('.');
  return parts.length === 3 && parts.every(part => part.length > 0);
}

// Obtenção dinâmica (não armazena em memória)
private getAuthToken(): string | null {
  try {
    return localStorage.getItem('authToken');
  } catch (error) {
    return null; // Modo privado ou localStorage desabilitado
  }
}
```

**Boas práticas:**
- ✅ Validar estrutura antes de usar
- ✅ Obter token dinamicamente (não cachear)
- ✅ Não logar tokens
- ✅ Remover token em caso de erro 401
- ✅ Usar HTTPS em produção

---

### 4. **Sanitização de Inputs**

**Por que sanitizar?**
Inputs do usuário podem conter:
- Scripts maliciosos (XSS)
- Comandos SQL (SQL Injection)
- Caracteres de controle
- Dados malformados

**Como foi implementado:**
```typescript
// InputValidatorService
validarEmail(email: string): string | null {
  // Remove espaços e caracteres de controle
  const sanitized = email.trim().replace(/[\x00-\x1F\x7F]/g, '');
  
  // Valida formato
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitized)) return null;
  
  // Previne caracteres perigosos
  if (/[<>\"'%;()&+]/.test(sanitized)) return null;
  
  return sanitized.toLowerCase();
}
```

**Regras de sanitização:**
- ✅ Remover tags HTML
- ✅ Remover caracteres de controle
- ✅ Validar formato (regex)
- ✅ Limitar tamanho
- ✅ Normalizar dados (lowercase, trim)

---

### 5. **Tratamento Seguro de Erros**

**Riscos de expor erros:**
- Stack traces expõem estrutura do código
- Mensagens de erro revelam informações do sistema
- Paths de arquivos expõem estrutura do servidor
- Versões de bibliotecas revelam vulnerabilidades conhecidas

**Como foi implementado:**
```typescript
// ANTES (inseguro)
error: (err) => {
  console.error('Erro:', err);
  alert(`Erro: ${err.status} - ${err.message}`);
}

// DEPOIS (seguro)
error: (_err) => {
  // Não loga detalhes
  this.notificationService.showError('Erro ao processar. Tente novamente.');
}
```

**Boas práticas:**
- ✅ Mensagens genéricas para usuários
- ✅ Não logar dados sensíveis
- ✅ Logs detalhados apenas no servidor (com acesso restrito)
- ✅ Não expor stack traces em produção

---

### 6. **Prevenção de IDOR (Insecure Direct Object References)**

**O que é IDOR?**
Acesso não autorizado a recursos através de manipulação de IDs ou parâmetros.

**Exemplo de ataque:**
```
GET /api/tarefa/123  (tarefa do usuário A)
GET /api/tarefa/124  (tarefa do usuário B - não autorizado!)
```

**Como foi implementado:**
```typescript
private validarPermissaoTarefa(tarefaId: number): boolean {
  const tarefa = this.tarefas.find(t => t.id === tarefaId);
  const idUsuarioLogado = this.authService.obterIdUsuarioLogado();
  
  // Verifica se a tarefa pertence ao usuário logado
  return tarefa.usuario === this.usuario[0]?.nome || 
         (tarefa as any).idusuario === idUsuarioLogado;
}

// Uso antes de operações sensíveis
public excluirTarefa(id: number): void {
  if (!this.validarPermissaoTarefa(id)) {
    this.notificationService.showError('Sem permissão.');
    return;
  }
  // ... continua exclusão
}
```

**Importante:** Esta validação no frontend é apenas uma camada. O **backend DEVE** fazer a mesma validação!

---

### 7. **HTTP Interceptor de Segurança**

**O que é um Interceptor?**
Intercepta requisições HTTP antes de enviá-las e respostas antes de processá-las.

**Como foi implementado:**
```typescript
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Obtém token de forma segura
  const token = localStorage.getItem('authToken');
  
  // 2. Valida token antes de usar
  if (token && validarTokenJWT(token)) {
    // 3. Adiciona header de autorização
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    
    // 4. Trata erros de autenticação
    return next(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token inválido - limpa e redireciona
          localStorage.removeItem('authToken');
          router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
  
  return next(req);
};
```

**Benefícios:**
- ✅ Centraliza lógica de autenticação
- ✅ Adiciona token automaticamente
- ✅ Trata erros 401 globalmente
- ✅ Reduz duplicação de código

---

## 📚 Conceitos e Explicações

### **Defense in Depth (Defesa em Profundidade)**

**Conceito:** Múltiplas camadas de segurança, de forma que se uma falhar, outras ainda protegem.

**Exemplo no sistema:**
1. **Frontend:** Valida inputs e permissões
2. **Interceptor:** Valida token e adiciona headers
3. **Backend:** Valida token, permissões e inputs novamente
4. **Banco de dados:** Constraints e validações

---

### **Princípio do Menor Privilégio**

**Conceito:** Usuários e processos devem ter apenas os privilégios mínimos necessários.

**Exemplo:**
- Usuário comum não pode acessar tarefas de outros usuários
- Usuário não pode modificar dados do sistema
- Apenas o dono da tarefa pode excluí-la

---

### **Fail-Secure (Falhar de Forma Segura)**

**Conceito:** Em caso de erro ou falha, o sistema deve negar acesso por padrão.

**Exemplo:**
```typescript
// Se não conseguir validar token, nega acesso
if (!validarTokenJWT(token)) {
  return null; // Nega acesso
}
```

---

### **Whitelist vs Blacklist**

**Whitelist (Lista de Permitidos):**
- ✅ Mais seguro
- ✅ Permite apenas o que é conhecido como seguro
- ✅ Exemplo: `['.pdf', '.jpg', '.png']`

**Blacklist (Lista de Bloqueados):**
- ❌ Menos seguro
- ❌ Bloqueia apenas o que é conhecido como perigoso
- ❌ Pode deixar passar novas ameaças
- ❌ Exemplo: `['.exe', '.bat', '.sh']`

**No sistema:** Usamos whitelist para tipos de arquivo e extensões.

---

### **Sanitização vs Validação**

**Validação:**
- Verifica se os dados estão no formato correto
- Exemplo: Email tem @ e domínio válido?

**Sanitização:**
- Remove ou escapa caracteres perigosos
- Exemplo: Remove tags HTML de um texto

**Ambos são necessários!**

---

### **Token JWT - Estrutura e Validação**

**Estrutura:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6IkpvaG4ifQ.signature
  └─ Header ─────────────┘ └─ Payload ─────┘ └─ Signature ─┘
```

**Validação básica:**
1. Verifica se tem 3 partes separadas por ponto
2. Verifica se cada parte não está vazia
3. (Backend) Verifica assinatura com chave secreta
4. (Backend) Verifica expiração (exp)

---

## ✅ Boas Práticas Aplicadas

### 1. **Não Armazenar Dados Sensíveis no Frontend**
- ✅ Tokens são temporários
- ✅ Não armazena senhas
- ✅ Não loga dados pessoais

### 2. **Validação em Múltiplas Camadas**
- ✅ Frontend valida para UX
- ✅ Backend valida para segurança
- ✅ Banco de dados tem constraints

### 3. **Mensagens de Erro Genéricas**
- ✅ Não expõe detalhes técnicos
- ✅ Não revela estrutura do sistema
- ✅ Não mostra stack traces

### 4. **Sanitização Consistente**
- ✅ Todos os inputs são sanitizados
- ✅ Todas as mensagens são sanitizadas
- ✅ Dados do localStorage são sanitizados

### 5. **Validação de Arquivos Robusta**
- ✅ Tipo MIME
- ✅ Extensão
- ✅ Tamanho
- ✅ Nome (previne path traversal)

---

## 🚀 Recomendações Adicionais

### Para Produção:

1. **HTTPS Obrigatório**
   - Configure SSL/TLS no servidor
   - Force redirecionamento HTTP → HTTPS

2. **Content Security Policy (CSP)**
   - Configure headers CSP no servidor
   - Previne XSS e injection attacks

3. **Rate Limiting**
   - Limite requisições por IP
   - Previne brute force e DoS

4. **CORS Configurado**
   - Permita apenas origens confiáveis
   - Não use `*` em produção

5. **Headers de Segurança**
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   X-XSS-Protection: 1; mode=block
   Strict-Transport-Security: max-age=31536000
   ```

6. **Monitoramento**
   - Logs de segurança
   - Alertas de tentativas de ataque
   - Auditoria de acessos

7. **Backup e Recuperação**
   - Backups regulares
   - Teste de recuperação
   - Plano de contingência

---

## 📖 Glossário

- **XSS:** Cross-Site Scripting - Injeção de scripts maliciosos
- **IDOR:** Insecure Direct Object References - Acesso não autorizado a recursos
- **JWT:** JSON Web Token - Padrão de autenticação
- **DoS:** Denial of Service - Negação de serviço
- **CSP:** Content Security Policy - Política de segurança de conteúdo
- **CORS:** Cross-Origin Resource Sharing - Compartilhamento de recursos entre origens
- **MIME:** Multipurpose Internet Mail Extensions - Tipo de conteúdo
- **Path Traversal:** Acesso a arquivos fora do diretório permitido

---

## 🔗 Referências

- [OWASP Top 10 2021](https://owasp.org/Top10/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [JWT.io](https://jwt.io/) - Documentação sobre JWT
- [Angular Security Guide](https://angular.io/guide/security)

---

**Última atualização:** Dezembro 2024
**Versão do documento:** 1.0

