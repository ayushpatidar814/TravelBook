import express from 'express';
import { hostaStay, listStay } from '../controllers/stayController.js';
import upload from '../middlewares/multer.js';
import protect from '../middlewares/auth.js';

const stayRouter = express.Router();

stayRouter.post('/add', protect, upload.array('images', 20), hostaStay);
stayRouter.get('/list', listStay)

export default stayRouter;