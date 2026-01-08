import pool from '../config/db.js';

export const UserModel = {

  // Buscar usuario por email
  async findByEmail(email) {
    const [[user]] = await pool.query(
      'SELECT * FROM usuarios WHERE email = ? AND activo = 1',
      [email]
    );
    return user;
  },

  // Buscar usuario por ID
  async findById(id) {
    const [[user]] = await pool.query(
      'SELECT id_usuario, nombre, email, activo FROM usuarios WHERE id_usuario = ?',
      [id]
    );
    return user;
  }

};
