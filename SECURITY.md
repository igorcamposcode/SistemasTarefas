# Política de Segurança

## Versões suportadas

| Versão | Suportado |
| ------ | --------- |
| 1.0.x  | Sim       |

## Relatar vulnerabilidades

Abra uma issue privada ou entre em contato com os mantenedores do repositório.
Não publique detalhes de falhas de segurança em issues públicas antes de correção.

## Medidas implementadas (resumo)

- Autenticação JWT com validação no servidor (assinatura e expiração).
- Rate limiting em login, cadastro e recuperação de senha.
- Recuperação de senha exige e-mail + telefone cadastrado (sem alteração de schema).
- Helmet e CORS restrito no backend.
- Autorização por usuário nas rotas de tarefas, documentos e perfil.
- Validação de upload no cliente e no servidor (tipo, tamanho, extensão).
