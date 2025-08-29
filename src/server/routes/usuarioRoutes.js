const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { autenticarToken } = require('../middlewares/authMiddleware');

router.post('/', usuarioController.criarUsuario);
router.get('/:id', autenticarToken, usuarioController.buscarUsuarioPorId);
router.put('/', autenticarToken, usuarioController.atualizarUsuario);
router.delete('/:id', autenticarToken, usuarioController.deletarUsuario);

module.exports = router;
