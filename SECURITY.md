# Política de Segurança

<<<<<<< HEAD
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
=======
## Versões Suportadas

Use esta seção para informar quais versões do seu projeto estão
atualmente sendo suportadas com atualizações de segurança.

| Versão  | Suportado          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Relatando uma Vulnerabilidade

Use esta seção para informar como relatar uma vulnerabilidade.

Informe para onde ir, com que frequência eles podem esperar receber uma
atualização sobre uma vulnerabilidade relatada, o que esperar se a
vulnerabilidade for aceita ou rejeitada, etc.
>>>>>>> cc3bfc73a40949b50ca35f42bf02b7c46b801383
