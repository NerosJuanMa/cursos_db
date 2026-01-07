import pool from "../config/db.js";

/**
 * Buscar usuario por email
 * ------------------------
 * - Recibe un email.
 * - Lanza una consulta SELECT con un placeholder (?).
 * - Devuelve el primer registro que coincida (o undefined si no hay resultados).
 */
export async function buscarPorEmail(email) {
  // Ejecutamos la consulta de forma parametrizada:
  // El ? se sustituye por el valor de [email] que le vendrá del frontend.
  const [rows] = await pool.query(
    'SELECT id_usuario, nombre, email, password, fecha_nacimiento, activo FROM usuarios WHERE email = ? ',
    [email]
  );

  // Devolvemos solo la primera fila.
  // Si no hay filas, rows[0] será undefined.
  return rows[0];
}

/**
 * Crear nuevo usuario
 * -------------------
 * - Recibe un objeto con nombre, email y password (ya hasheado).
 * - Inserta un nuevo registro en la tabla usuarios.
 * - Devuelve un objeto "limpio" con la información básica del usuario creado.
 */
export async function crearusuario({ nombre, email, password, fecha_nacimiento, activo }) {
  // INSERT parametrizado. Los ? se rellenan con [nombre, email, password]
  const [result] = await pool.query(
    'INSERT INTO usuarios (nombre, email, password, fecha_nacimiento, activo) VALUES (?, ?, ?, ?, ?)',
    [nombre, email, password, fecha_nacimiento, activo]
  );

  // Devolvemos un objeto con los datos principales.
  // result.insertId contiene el id autoincrement generado por MySQL.
  return {
    insertId: result.insertId,
    id: result.insertId,
    nombre,
    email,
    fecha_nacimiento, 
    activo
  };
}