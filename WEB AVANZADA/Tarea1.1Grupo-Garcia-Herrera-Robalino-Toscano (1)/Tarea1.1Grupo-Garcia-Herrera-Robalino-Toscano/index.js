const express = require('express');
const app = express();
const userService = require('./userService');
const PORT = 3001;

// Configuración para servir archivos estáticos
app.use(express.static('public'));

// Ruta que utiliza Callback
app.get('/users/callback', (req, res) => {
  userService.obtenerUsuariosCallback((err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Error encontrando usuarios con Callback' });
    }
    res.json(users);
  });
});

// Ruta que utiliza Promesas
app.get('/users/promise', (req, res) => {
  userService.obtenerUsuariosPromesa()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: 'Error encontrando usuarios com Promesa' }));
});

// Ruta que utiliza Async/Await
app.get('/users/async', async (req, res) => {
  try {
    const usuarios = await userService.obtenerUsuariosAsync();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error encontrando usuarios com Async/Await' });
  }
});

app.listen(PORT, () => {
  console.log(`Server está corriendo en http://localhost:${PORT}`);
});