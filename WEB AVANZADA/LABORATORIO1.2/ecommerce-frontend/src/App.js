import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [filtros, setFiltros] = useState({
    nombre: "",
    precioMin: 0,
    precioMax: 1000
  });

  // Petición síncrona: Cargar productos al inicio
  useEffect(() => {
    obtenerProductos();
  }, [filtros]); // Volver a cargar los productos si los filtros cambian

  // Obtener productos con filtros
  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/productos", {
        params: filtros
      });
      setProductos(response.data);
      setError(null);
    } catch (error) {
      console.error("Hubo un error al obtener los productos", error);
      setError("Error al cargar los productos.");
    }
  };

  // Ver detalles de un producto
  const verDetallesProducto = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/productos/${id}`);
      setProductoSeleccionado(response.data);
      setError(null);
    } catch (error) {
      console.error("Hubo un error al obtener el detalle del producto", error);
      setError("Error al cargar los detalles del producto.");
    }
  };

  // Agregar producto al carrito
  const agregarAlCarrito = async (id) => {
    try {
      const response = await axios.post("http://localhost:5000/api/carrito", { id });
      setCarrito(response.data);
    } catch (error) {
      console.error("Hubo un error al agregar el producto al carrito", error);
    }
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/carrito/${id}`);
      setCarrito(response.data);
    } catch (error) {
      console.error("Hubo un error al eliminar el producto del carrito", error);
    }
  };

  // Cambiar filtros
  const cambiarFiltro = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value
    });
  };

  // Cerrar modal de producto
  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  // Mostrar el carrito
  const mostrarCarrito = () => {
    if (carrito.length === 0) {
      return <p>No hay productos en el carrito.</p>;
    }

    return (
      <div>
        <h2>Carrito de Compras</h2>
        <ul className="list-group">
          {carrito.map((producto, index) => (
            <li key={index} className="list-group-item">
              <p>{producto.nombre}</p>
              <p>${producto.precio}</p>
              <button
                className="btn btn-danger"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <p>Total: ${carrito.reduce((total, producto) => total + producto.precio, 0)}</p>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Tienda en Línea</h1>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={filtros.nombre}
            onChange={cambiarFiltro}
            placeholder="Filtrar por nombre"
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            name="precioMin"
            value={filtros.precioMin}
            onChange={cambiarFiltro}
            placeholder="Precio mínimo"
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            name="precioMax"
            value={filtros.precioMax}
            onChange={cambiarFiltro}
            placeholder="Precio máximo"
          />
        </div>
      </div>

      {/* Mensaje de error */}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
             
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">${producto.precio}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => verDetallesProducto(producto.id)}
                >
                  Ver detalles
                </button>
                <button
                  className="btn btn-success mt-2"
                  onClick={() => agregarAlCarrito(producto.id)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar carrito */}
      <div className="mt-5">
        <button className="btn btn-info" onClick={mostrarCarrito}>
          Ver Carrito
        </button>
        {mostrarCarrito()}
      </div>

      {productoSeleccionado && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{productoSeleccionado.nombre}</h5>
                <button type="button" className="close" onClick={cerrarModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{productoSeleccionado.descripcion}</p>
                <p>${productoSeleccionado.precio}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
