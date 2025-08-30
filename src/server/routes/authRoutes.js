const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/cadastro', authController.cadastro);
router.post('/recuperar-senha', authController.recuperarSenha);

module.exports = router;
