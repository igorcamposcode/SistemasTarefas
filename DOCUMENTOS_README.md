# Funcionalidade de Documentos Anexados às Tarefas

## Visão Geral

Esta funcionalidade permite anexar arquivos às tarefas principais, incluindo o armazenamento na tabela `documento`.

## Funcionalidades Implementadas

### 1. Upload de Documentos

- **Anexar arquivos** ao criar uma nova tarefa
- **Anexar arquivos** ao editar uma tarefa existente
- **Tipos de arquivo suportados**: PDF, DOC, DOCX, TXT, XLS, XLSX, JPG, JPEG, PNG, GIF
- **Limite de tamanho**: 10MB por arquivo

### 3. Exibição no Frontend

- **Cards das tarefas** mostram todos os documentos anexados
- **Informações exibidas**: Nome do arquivo, tamanho e extensão
- **Ações disponíveis**: Download e exclusão de documentos

### 4. Operações de Documentos

- **Download**: Baixar o arquivo original
- **Exclusão**: Remover documento da tarefa (com confirmação)
- **Visualização**: Lista organizada de todos os documentos anexados

## Como Usar

### Anexar Documento ao Criar Tarefa

1. Clique em "Nova Tarefa"
2. Preencha os campos obrigatórios
3. Use o campo "Anexar Documento" para selecionar um arquivo
4. Clique em "Salvar"
5. O sistema criará a tarefa e anexará o documento automaticamente

### Anexar Documento a Tarefa Existente

1. Clique no botão de editar (ícone de lápis) na tarefa
2. Selecione um novo arquivo no campo "Anexar Documento"
3. Clique em "Salvar"
4. O sistema atualizará a tarefa e anexará o novo documento

### Gerenciar Documentos Anexados

- **Visualizar**: Os documentos aparecem na seção "Documentos Anexados" de cada tarefa
- **Download**: Clique no botão de download (ícone de seta para baixo)
- **Excluir**: Clique no botão de exclusão (ícone de lixeira) e confirme

## Próximas Melhorias

- [ ] Suporte a múltiplos arquivos por tarefa
- [ ] Preview de imagens e PDFs
- [ ] Compressão automática de arquivos grandes
- [ ] Integração com serviços de armazenamento em nuvem
- [ ] Histórico de versões de documentos
