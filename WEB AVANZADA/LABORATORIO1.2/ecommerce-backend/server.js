const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000" })); // Permite las solicitudes desde el frontend
app.use(express.json()); // Permite el manejo de cuerpos JSON

// Datos de ejemplo
let productos = [
  { 
    id: 1, 
    nombre: "Zapatos Deportivos", 
    precio: 100, 
    descripcion: "Zapatos deportivos de alta calidad, cómodos y duraderos. Perfectos para cualquier tipo de actividad física o casual.", 
    imagen: "/img/zapatos.jpg", 
    stock: 10 
  },
  { 
    id: 2, 
    nombre: "Camiseta Básica", 
    precio: 25, 
    descripcion: "Camiseta básica de algodón suave, ideal para el día a día. Disponible en varios colores y tallas.", 
    imagen: "/img/prod2.jpg", 
    stock: 50 
  },
  { 
    id: 3, 
    nombre: "Pantalones Cortos", 
    precio: 40, 
    descripcion: "Pantalones cortos para verano, ligeros y cómodos. Hechos con material transpirable, ideales para días calurosos.", 
    imagen: "/img/prod3.jpg", 
    stock: 30 
  },
  { 
    id: 4, 
    nombre: "Chaqueta Impermeable", 
    precio: 120, 
    descripcion: "Chaqueta impermeable para actividades al aire libre. Mantén el calor y la comodidad incluso en los días más fríos y lluviosos.", 
    imagen: "/img/prod4.jpg", 
    stock: 15 
  },
  { 
    id: 5, 
    nombre: "Reloj Deportivo", 
    precio: 85, 
    descripcion: "Reloj deportivo resistente al agua, con múltiples funciones como cronómetro, fecha y resistencia a impactos.", 
    imagen: "/img/prod5.jpg", 
    stock: 25 
  },
  { 
    id: 6, 
    nombre: "Mochila de Senderismo", 
    precio: 150, 
    descripcion: "Mochila de senderismo con capacidad de 40L, perfecta para excursiones largas. Con múltiples compartimentos y respaldo ergonómico.", 
    imagen: "/img/prod6.jpg", 
    stock: 10 
  },
  { 
    id: 7, 
    nombre: "Auriculares Bluetooth", 
    precio: 70, 
    descripcion: "Auriculares inalámbricos Bluetooth con cancelación de ruido y sonido de alta calidad. Perfectos para ejercicio o relajación.", 
    imagen: "/img/prod7.jpg", 
    stock: 40 
  },
  { 
    id: 8, 
    nombre: "Gafas de Sol", 
    precio: 45, 
    descripcion: "Gafas de sol UV400, con un diseño elegante y lentes de alta protección para mantener tus ojos seguros bajo el sol.", 
    imagen: "/img/prod8.jpg", 
    stock: 100 
  },
  { 
    id: 9, 
    nombre: "Silla de Oficina Ergonómica", 
    precio: 250, 
    descripcion: "Silla ergonómica de oficina con soporte lumbar ajustable, ruedas de alta calidad y material transpirable para largas jornadas laborales.", 
    imagen: "/img/prod9.jpg", 
    stock: 5 
  },
  { 
    id: 10, 
    nombre: "Lámpara LED de Escritorio", 
    precio: 35, 
    descripcion: "Lámpara LED regulable de escritorio con función táctil. Ideal para leer, estudiar o trabajar sin forzar la vista.", 
    imagen: "/img/prod10.jpg", 
    stock: 50 
  }
];


let carrito = [];

// Ruta para obtener todos los productos con filtros
app.get("/api/productos", (req, res) => {
  const { nombre, precioMin, precioMax } = req.query;
  let productosFiltrados = productos;

  if (nombre) {
    productosFiltrados = productosFiltrados.filter((producto) =>
      producto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  if (precioMin) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio >= parseInt(precioMin)
    );
  }

  if (precioMax) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio <= parseInt(precioMax)
    );
  }

  res.json(productosFiltrados);
});

// Ruta para obtener los detalles de un producto
app.get("/api/productos/:id", (req, res) => {
  const producto = productos.find((prod) => prod.id == req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

// Ruta para agregar un producto al carrito
app.post("/api/carrito", (req, res) => {
  const { id } = req.body;
  const producto = productos.find((prod) => prod.id == id);
  
  if (producto) {
    carrito.push(producto); // Agregar producto al carrito
    res.json(carrito); // Enviar el carrito actualizado
  } else {
    res.status(404).send("Producto no encontrado");
  }
});
// Ruta para eliminar un producto del carrito
app.delete("/api/carrito/:id", (req, res) => {
  const { id } = req.params;
  // Filtrar el producto a eliminar
  carrito = carrito.filter(producto => producto.id !== parseInt(id));
  res.json(carrito); // Enviar el carrito actualizado
});

// Ruta para obtener el carrito
app.get("/api/carrito", (req, res) => {
  res.json(carrito);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
