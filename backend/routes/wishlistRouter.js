import express from 'express'
import protect from '../middlewares/auth.js';
import { addToWishlist, getWishlist, removeFromWishlist } from '../controllers/wishlistController.js';

const wishlistRouter = express.Router();

wishlistRouter.post('/add', protect, addToWishlist);
wishlistRouter.get('/get', protect, getWishlist);
wishlistRouter.post('/remove', protect, removeFromWishlist);

export default wishlistRouter;