// import { Router } from 'express';
// import * as cursosController from '../controllers/cursos.controller.js';


// const cursosRoutes = Router();

/**
 * ==========================================
 * 📦 RUTAS DE CURSOS
 * ==========================================
 */
import { Router } from 'express';
import {CursosController
//   getCursos,
//   getCurso,
//   createCurso,
//   updateCurso,
//   deleteCurso
} from '../controllers/cursos.controller.js';
import { auth } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', CursosController);
router.get('/:id', CursosController);
router.post('/', auth, CursosController);
router.put('/:id', auth, CursosController);
router.delete('/:id', auth, CursosController);

export default router;



// cursosRoutes.get('/', cursosController.getCursos);

// GET /api/productos
// productosRoutes.get('/', (req, res) => {
//   res.json({
//     ok: true,
//     mensaje: 'Aquí devolveremos la lista de productos desde la base de datos'
//   });
// });

// export default cursosRoutes;


