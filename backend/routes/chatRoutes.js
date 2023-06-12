import express from 'express';
const router = express.Router();
import { chatWithGpt3 } from '../controllers/chatController.js';

router.route('/').post(chatWithGpt3);

export default router;
