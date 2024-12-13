import feedbackRoutes from './feedbackRoutes.js';
import tipRoutes from './tipsRoutes.js'
import express from 'express';
const router = express.Router();

router.use('/feedback', feedbackRoutes);
router.use('/tips', tipRoutes);

export default router;
