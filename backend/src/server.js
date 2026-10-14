import express from 'express';
import dotenv from 'dotenv';
dotenv.config();   
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
const Port = process.env.Port || 3000;


const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/message',messageRoutes);;

app.listen(Port,()=>console.log(`Server is running on port ${Port}`)); 