// Datos simulados de usuarios
const usuarios = [
    { id: 1, nombre: 'Alice' },
    { id: 2, nombre: 'Bob' },
    { id: 3, nombre: 'Charlie' },
  ];
  
  // Función para simular una consulta de datos con un retraso
  function simularConsulta(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }
  
  // Callback
  function obtenerUsuariosCallback(callback) {
    simularConsulta(1000)
      .then(() => callback(null, usuarios))
      .catch(err => callback(err, null));
  }
  
  // Promesa
  function obtenerUsuariosPromesa() {
    return simularConsulta(1000).then(() => usuarios);
  }
  
  // Async/Await
  async function obtenerUsuariosAsync() {
    await simularConsulta(1000);
    return usuarios;
  }
  
  module.exports = {
    obtenerUsuariosCallback,
    obtenerUsuariosPromesa,
    obtenerUsuariosAsync,
  };