import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();

import cors from 'cors';
import connectDb from './config/mongoDb.js';
import userRouter from './routes/userRouter.js';
import stayRouter from './routes/stayRouter.js';
import wishlistRouter from './routes/wishlistRouter.js';

connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:4000"],
    credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running...")
})

app.use('/user', userRouter);
app.use('/stay', stayRouter);
app.use('/wishlist', wishlistRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})