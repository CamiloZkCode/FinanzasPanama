const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/registrarusuario.controller');
const { verificarToken, verificarRoles } = require('../middlewares/auth.middlewares');

router.post('/registrousuario', verificarToken, verificarRoles('Administrador','Supervisor'), registrarUsuario);

module.exports = router; 

