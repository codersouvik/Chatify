import express from 'express';
import dotenv from 'dotenv';
import Path from 'path';
dotenv.config();   
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
const PORT = process.env.Port || 3000;


const app = express();

const _dirname = Path.resolve();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/message',messageRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(Path.join(_dirname,'../frontend/Chatify/dist')));

    app.get(/.*/,(_,res)=>{
        res.sendFile(Path.join(_dirname,'/frontend/Chatify/dist/index.html'));
    }); 
}

app.listen(PORT,()=>console.log(`Server is running on port ${Port}`)); 