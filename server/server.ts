import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`The backend server is started at ${process.env.PORT}`);
})