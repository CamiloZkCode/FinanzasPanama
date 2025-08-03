const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/registrarusuario.controller');
const { verificarToken, verificarRoles } = require('../middlewares/auth.middlewares');
const usuariocontroller = require('../controllers/usuario.controller');



router.post('/registrousuario', verificarToken, verificarRoles('Administrador','Supervisor'), registrarUsuario);
router.get('/supervisores', usuariocontroller.getSupervisores);
module.exports = router; 

