// import pool from "../config/db.js";

// export async function obtenerCursos() {
//     const [rows] = await pool.query(
//     `SELECT c.id_curso, c.id_especialidad, c.nombre_curso, c.fecha_realizacion, c.FechaCalculadaAño, c.practicas, c.id_practicas, c.duracion_curso, c.conocimientos_adquiridos, c.Centro_Estudio, e.nombre, e.familia, e.aplicaciones 
//      FROM cursos.cursos c 
//      JOIN cursos.especialidad e
//      ON c.id_especialidad= e.id_especialidad
//      ORDER BY c.id_curso DESC`
//   );
//   return rows;
// }

import pool from '../config/db.js';

export const CursosModel = {

  async findAll() {
    const [rows] = await pool.query(
      'SELECT * FROM cursos ORDER BY id_curso DESC'
    );
    return rows;
  },

  async findById(id) {
    const [[curso]] = await pool.query(
      'SELECT * FROM cursos WHERE id_curso = ?',
      [id]
    );
    return curso;
  },

  async create(data) {
    const [result] = await pool.query(
      'INSERT INTO cursos SET ?',
      data
    );
    return result.insertId;
  },

  async update(id, data) {
    await pool.query(
      'UPDATE cursos SET ? WHERE id_curso = ?',
      [data, id]
    );
  },

  async delete(id) {
    await pool.query(
      'DELETE FROM cursos WHERE id_curso = ?',
      [id]
    );
  }

};
