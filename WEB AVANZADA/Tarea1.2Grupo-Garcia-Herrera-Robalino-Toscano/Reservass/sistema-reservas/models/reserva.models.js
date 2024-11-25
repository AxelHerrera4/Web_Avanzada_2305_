class Reserva {
    constructor(id, tipo, nombre_cliente, fecha, hora, creado_en) {
      this.id = id;
      this.tipo = tipo;
      this.nombre_cliente = nombre_cliente;
      this.fecha = fecha;
      this.hora = hora;
      this.creado_en = creado_en;
    }
  }
  
  module.exports = Reserva;
  