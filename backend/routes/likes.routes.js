import { Router } from 'express';
import { getLikes, addLike } from '../controllers/likes.controller.js';

const router = Router();
router.get('/', getLikes);
router.post('/', addLike);

export default router;

