const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require('../controlador/autentControl');
// Ruta para registrar un nuevo usuario
router.post('/registro', registrarUsuario);
// Ruta para iniciar sesión
router.post('/login', loginUsuario);
module.exports = router;