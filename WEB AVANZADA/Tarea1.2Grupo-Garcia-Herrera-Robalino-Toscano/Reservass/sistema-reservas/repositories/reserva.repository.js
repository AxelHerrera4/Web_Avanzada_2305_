const db = require('../config/db');

class ReservaRepository {
  async obtenerTodas() {
    const [reservas] = await db.query('SELECT * FROM reserva');
    return reservas;
  }

  async crear(reserva) {
    const [resultado] = await db.query('INSERT INTO reserva SET ?', reserva);
    return resultado.insertId;
  }

  async obtenerPorId(id) {
    const [reservas] = await db.query('SELECT * FROM reserva WHERE id = ?', [id]);
    return reservas[0];
  }

  async actualizar(id, datos) {
    await db.query('UPDATE reserva SET ? WHERE id = ?', [datos, id]);
  }

  async eliminar(id) {
    await db.query('DELETE FROM reserva WHERE id = ?', [id]);
  }
}

module.exports = new ReservaRepository();
