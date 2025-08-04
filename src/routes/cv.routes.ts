import { Router } from 'express';
import { queryCV } from '../controllers/cv.controller';

const router = Router();

router.get('/query', queryCV);

export default router;