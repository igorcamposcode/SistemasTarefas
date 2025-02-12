const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas CRUD para tarefas
router.post('/', authMiddleware.autenticarToken, tarefaController.criarTarefa);
router.get('/', authMiddleware.autenticarToken, tarefaController.buscarTarefas);
router.put('/:id', authMiddleware.autenticarToken, tarefaController.atualizarTarefa);
router.delete('/:id', authMiddleware.autenticarToken, tarefaController.deletarTarefa);
router.get('/meta', tarefaController.getMeta);

module.exports = router;
