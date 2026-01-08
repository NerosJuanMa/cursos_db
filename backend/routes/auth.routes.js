//routes/auth.routes.js
// import { Router } from 'express';
// import * as authController from '../controllers/auth.controllers.js';
 
// const loginrouter = Router();
 
/**
 * ==========================================
 * 🔐 RUTAS DE AUTENTICACIÓN
 * ==========================================
 */
 
// // Registrar usuario
// loginrouter.post('/register', authController.register);
 
// // Login usuario
// loginrouter.post('/login', authController.login);
 
// export default loginrouter;
 

import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

const router = Router();
router.post('/login', AuthController);
export default router;
