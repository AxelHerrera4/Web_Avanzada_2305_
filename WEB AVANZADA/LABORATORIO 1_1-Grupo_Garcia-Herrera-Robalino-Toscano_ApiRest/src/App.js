import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el login
  const cabeceraLogin = async () => {
    const respuesta = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, contrasenia }),
    });
    const data = await respuesta.json();
    setMensaje(data.message || data.token || 'Error en el servidor');
  };

  // Función para manejar el registro
  const cabeceraRegistro = async () => {
    const respuesta = await fetch('/api/auth/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, contrasenia }),
    });
    const data = await respuesta.json();
    setMensaje(data.message || 'Error en el servidor');
  };

  return (
    <div>
      <h2>Registro e Inicio de Sesión</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        value={contrasenia}
        onChange={(e) => setContrasenia(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={cabeceraRegistro}>Registrar</button>
      <button onClick={cabeceraLogin}>Iniciar sesión</button>
      <div>{mensaje}</div>
    </div>
  );
}

export default App;  // Exportar el componente App
