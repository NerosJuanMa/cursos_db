import pool from './config/db.js'; /** Ajusta tu import según tu configuración*/
 
async function crearBBDD() {
// TABLA LIKES
  await pool.query(`
    CREATE TABLE IF NOT EXISTS likes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page_id VARCHAR(255) NOT NULL,
      user_ip VARCHAR(45) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE (page_id, user_ip)
    );
  `);


  // TABLA cursos
  await pool.query(`
    CREATE TABLE IF NOT EXISTS cursos (
  id_curso int(11) NOT NULL,
  id_especialidad int(11) DEFAULT NULL,
  nombre_curso varchar(150) DEFAULT NULL,
  fecha_realizacion varchar(50) DEFAULT NULL,
  FechaCalculadaAño year(4) DEFAULT NULL,
  practicas tinyint(1) DEFAULT NULL,
  id_practicas int(11) DEFAULT NULL,
  duracion_curso varchar(50) DEFAULT NULL,
  conocimientos_adquiridos varchar(500) DEFAULT NULL,
  Centro_Estudio varchar(50) DEFAULT NULL
)
  `);
 
  // TABLA apuntes
  await pool.query(`
    CREATE TABLE IF NOT EXISTS apuntes (
        id_apunte int(11) NOT NULL,
        id_curso int(11) DEFAULT NULL,
        modulo varchar(10) DEFAULT NULL,
        unidad_formativa varchar(10) DEFAULT NULL,
        tema varchar(50) DEFAULT NULL,
        pdf longblob DEFAULT NULL,
        resumen text DEFAULT NULL
    )
  `);
 
 // TABLA empresas
  await pool.query(`
    CREATE TABLE IF NOT EXISTS empresas (
        id_empresa int(11) NOT NULL,
        nombre varchar(50) DEFAULT NULL,
        ubicacion varchar(50) DEFAULT NULL,
        telefono int(11) DEFAULT NULL,
        web varchar(50) DEFAULT NULL,
        email varchar(50) DEFAULT NULL,
        persona_contacto varchar(50) DEFAULT NULL,
        mobil_contacto int(11) DEFAULT NULL
    )
  `);
 
// TABLA especialidad
  await pool.query(`
    CREATE TABLE IF NOT EXISTS especialidad (
        id_especialidad int(11) NOT NULL,
        nombre varchar(50) DEFAULT NULL,
        familia varchar(50) DEFAULT NULL,
        aplicaciones text DEFAULT NULL
    )
  `);

// TABLA practicas
  await pool.query(`
    CREATE TABLE IF NOT EXISTS practicas (
        id_practica int(11) NOT NULL,
        id_empresa int(11) NOT NULL,
        duracion varchar(10) DEFAULT NULL,
        feed-back text DEFAULT NULL,
        aptitudes_adquiridas text DEFAULT NULL,
        observaciones text DEFAULT NULL
    )   
  `);

  // TABLA usuarios
  await pool.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario int(10) UNSIGNED NOT NULL,
  nombre varchar(150) NOT NULL,
  email varchar(150) NOT NULL,
  pasword varchar(50) NOT NULL,
  fecha_nacimiento date NOT NULL,
  activo tinyint(1) DEFAULT 1
)    
  `);

 
  console.log("✅ Base de datos creada correctamente");
}
 
async function insertarDatosEjemplo() {
  try {
    // PRODUCTOS DE EJEMPLO (solo 3 categorías)
    await pool.query(`
      INSERT INTO productos (nombre, descripcion, precio, stock, categoria, imagen_url) VALUES
      ('Camiseta Básica', 'Camiseta de algodón cómoda', 19.99, 50, 'Ropa', 'https://via.placeholder.com/300x300/4CAF50/FFFFFF?text=Camiseta'),
      ('Pantalón Vaquero', 'Vaqueros clásicos azules', 49.99, 30, 'Ropa', 'https://via.placeholder.com/300x300/2196F3/FFFFFF?text=Pantalon'),
      ('Zapatillas Sport', 'Zapatillas cómodas para deporte', 79.99, 25, 'Ropa', 'https://via.placeholder.com/300x300/FF9800/FFFFFF?text=Zapatillas'),
      ('El Quijote', 'Clásico de la literatura española', 12.50, 20, 'Libros', 'https://via.placeholder.com/300x300/9C27B0/FFFFFF?text=Libro'),
      ('Guía JavaScript', 'Manual para programadores', 35.99, 15, 'Libros', 'https://via.placeholder.com/300x300/3F51B5/FFFFFF?text=JS+Book'),
      ('Smartphone Basic', 'Teléfono inteligente sencillo', 199.99, 10, 'Electrónica', 'https://via.placeholder.com/300x300/F44336/FFFFFF?text=Phone'),
      ('Auriculares', 'Auriculares con buen sonido', 29.99, 40, 'Electrónica', 'https://via.placeholder.com/300x300/795548/FFFFFF?text=Audio')
    `);
 
    // USUARIOS DE PRUEBA (password '123456' hasheada)
    await pool.query(`
      INSERT INTO clientes (nombre, email, password) VALUES
      ('Juan Pérez', 'test@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMye.JfVK7fCQpNpCPq9QdoW6lQk1K6kMSO'),
      ('Ana García', 'ana@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMye.JfVK7fCQpNpCPq9QdoW6lQk1K6kMSO'),
      ('Carlos López', 'carlos@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMye.JfVK7fCQpNpCPq9QdoW6lQk1K6kMSO')
    `);
 
    // PEDIDOS DE EJEMPLO
    await pool.query(`
      INSERT INTO pedidos (cliente_id, estado, total) VALUES
      (1, 'pendiente', 69.98),
      (2, 'enviado', 45.48),
      (1, 'entregado', 25.99)
    `);
 
    // DETALLE DE PEDIDOS
    await pool.query(`
      INSERT INTO pedidos_productos (pedido_id, producto_id, cantidad, precio_unitario) VALUES
      (1, 1, 2, 19.99),
      (1, 6, 1, 199.99),
      (2, 4, 1, 12.50),
      (2, 5, 1, 35.99),
      (3, 3, 1, 79.99)
    `);
 
    console.log("✅ Datos de ejemplo insertados correctamente");
  } catch (error) {
    console.error("❌ Error insertando datos:", error.message);
  }
}
 
// Ejecutar todo
(async () => {
  await crearBBDD();
  await insertarDatosEjemplo();
})();
 
 