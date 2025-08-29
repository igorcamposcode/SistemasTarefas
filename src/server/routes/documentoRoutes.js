const express = require('express');
const router = express.Router();
const DocumentoController = require('../controllers/documentoController');
const { autenticarToken } = require('../middlewares/authMiddleware');

// Aplicar middleware de autenticação em todas as rotas
router.use(autenticarToken);

// Upload de documento para uma tarefa
router.post('/upload', DocumentoController.uploadDocumento);

// Obter documentos de uma tarefa
router.get('/tarefa/:idtarefa/:idusuario', DocumentoController.getDocumentosTarefa);

// Download de um documento
router.get('/download/:id', DocumentoController.downloadDocumento);

// Excluir um documento
router.delete('/:id', DocumentoController.excluirDocumento);

module.exports = router;
