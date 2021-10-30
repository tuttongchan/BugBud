import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import bugRouter from './routers/bugRouter.js';
import imageRouter from './routers/imageRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/api/users', userRouter);
app.use('/api/bugs', bugRouter);
app.use('/api/images', imageRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`MongoDB is connected!`);
});
