import express from 'express'
import { getUser, registerUser } from '../controllers/userController.js';
import upload from '../middlewares/multer.js';
import { hostLogin, hostregister } from '../controllers/hostController.js';

const userRouter = express.Router()

// Guests
userRouter.post('/login', getUser)
userRouter.post('/register', upload.single('avatar'), registerUser)

// Host
userRouter.post('/hostlogin', hostLogin)
userRouter.post('/hostregister', upload.single('avatar'), hostregister)

// Admin


export default userRouter;