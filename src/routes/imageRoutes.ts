import { Router } from 'express';
import { processImage, getImageStatus, getProcessedImages } from '../controllers/imageController';

const router = Router();

router.post('/process', processImage);
router.get('/status', getImageStatus);
router.get('/processed', getProcessedImages);

export default router;
