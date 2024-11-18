const express=require('express');
const bodyParser=require('body-parser');
const conexionDB=require('./configuracion/db');
const autentRutas=require('./rutas/autentRutas');
const path = require('path');

const app=express();
conexionDB();// Conectar a la base de datos
app.use(bodyParser.json());// Habilitar el body-parser y manejar solicitudes JSON
app.use('/api/auth',autentRutas);// Rutas de autenticación

// Sirve los archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Ruta principal que devuelve el archivo 'index.html' de React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//Iniciar el servidor
const puerto=process.env.PORT || 3000;
app.listen(puerto,()=>{
    console.log(`El servidor está funcionando en el puerto ${puerto}`);
});