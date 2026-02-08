const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const { autenticarToken } = require('../middlewares/authMiddleware');

// Rotas CRUD para tarefas
router.post('/', autenticarToken, tarefaController.criarTarefa);
router.post('/:idmae/subtarefa', autenticarToken, tarefaController.criarSubTarefa);
router.get('/', autenticarToken, tarefaController.buscarTarefas);
router.put('/:id', autenticarToken, tarefaController.atualizarTarefa);
router.delete('/:id', autenticarToken, tarefaController.deletarTarefa);
router.delete('/subtarefa/:id', autenticarToken, tarefaController.deletarSubTarefa);
router.get('/meta', autenticarToken, tarefaController.getMeta);

module.exports = router;
