const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', usuarioController.criarUsuario);
router.get('/:id', authMiddleware.autenticarToken, usuarioController.buscarUsuarioPorId);
router.put('/', authMiddleware.autenticarToken, usuarioController.atualizarUsuario);
router.delete('/:id', authMiddleware.autenticarToken, usuarioController.deletarUsuario);

module.exports = router;
