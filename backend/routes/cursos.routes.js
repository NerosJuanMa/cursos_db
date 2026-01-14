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

router.get('/', CursosController.getCursos);
router.get('/:id', CursosController.getCurso);
router.post('/', auth, CursosController.createCurso);
router.put('/:id', auth, CursosController.updateCurso);
router.delete('/:id', auth, CursosController.deleteCurso);

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


