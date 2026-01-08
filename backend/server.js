// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import likesRoutes from './routes/likes.routes.js';

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());


// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('API Node + MySQL - BBDD CURSOS');
});


// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/likes', likesRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API Cursos funcionando 🚀' });
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
