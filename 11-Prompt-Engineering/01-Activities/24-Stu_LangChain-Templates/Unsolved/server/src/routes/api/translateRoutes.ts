import express from 'express';
import { getTranslations } from '../../controllers/translateController.js';

const router = express.Router();

//this url matches /api/translate/ with a post
router.post('/', getTranslations);

export default router;
