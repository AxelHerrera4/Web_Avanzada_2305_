import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiado a 'react-dom/client' para React 18+

import App from './App';  // Importar el componente principal

// Crear un root y renderizar el componente App
const root = ReactDOM.createRoot(document.getElementById('root'));  // Usar createRoot en React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
