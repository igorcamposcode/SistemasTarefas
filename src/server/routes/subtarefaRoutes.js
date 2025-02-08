const express = require('express');
const router = express.Router();
const subtarefaController = require('../controllers/subtarefaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:idmae/subtarefa', authMiddleware.autenticarToken, subtarefaController.criarSubtarefa);
router.put('/:id/subtarefa', authMiddleware.autenticarToken, subtarefaController.atualizarSubtarefa);

module.exports = router;
