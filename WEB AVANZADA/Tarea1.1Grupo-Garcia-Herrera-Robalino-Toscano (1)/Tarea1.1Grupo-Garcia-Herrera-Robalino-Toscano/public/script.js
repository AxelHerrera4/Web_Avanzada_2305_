function buscarUsuarios(method) {
    // Limpiar resultados previos
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Cargando...';
  
    fetch(`/users/${method}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(users => {
        resultDiv.innerHTML = `<h3>Usuarios (${method})</h3>`;
        const userList = document.createElement('ul');
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = `${user.id}: ${user.nombre}`;
          userList.appendChild(listItem);
        });
        resultDiv.appendChild(userList);
      })
      .catch(error => {
        resultDiv.innerHTML = `Error: ${error.message}`;
      });
  }