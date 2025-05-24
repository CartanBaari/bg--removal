import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRouter.js';
const PORT= process.env.PORT || 4000;
const app = express();
await connectDB()
app.use(express.json())
app.use(cors());
app.get('/' ,(req,res)=>res.send("Api Working--"))
app.use('/api/user',userRouter)
app.use('/api/image/webhooks',imageRouter)
app.listen(PORT,()=>console.log("Server is running on Port "+PORT));
 
