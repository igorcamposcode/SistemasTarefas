const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas para obter metadados
router.get('/prioridades', authMiddleware.autenticarToken, tarefaController.listarPrioridades);
router.get('/estados', authMiddleware.autenticarToken, tarefaController.listarEstados);

// Rotas CRUD para tarefas
router.post('/tarefas', authMiddleware.autenticarToken, tarefaController.criarTarefa);
router.get('/tarefas', authMiddleware.autenticarToken, tarefaController.buscarTarefas);
router.put('/tarefas/:id', authMiddleware.autenticarToken, tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', authMiddleware.autenticarToken, tarefaController.deletarTarefa);

module.exports = router;
