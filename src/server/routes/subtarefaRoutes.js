const express = require('express');
const router = express.Router();
const subtarefaController = require('../controllers/subtarefaController');
const { autenticarToken } = require('../middlewares/authMiddleware');

router.post('/:idmae/subtarefa', autenticarToken, subtarefaController.atualizarSubtarefa);
router.put('/:id/subtarefa', autenticarToken, subtarefaController.atualizarSubtarefa);

module.exports = router;
