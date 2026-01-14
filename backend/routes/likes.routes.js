import { Router } from 'express';
import { LikeController } from '../controllers/likes.controller.js';

const router = Router();
router.get('/', LikeController.getLikes);
router.post('/', LikeController.addLike);

export default router;

