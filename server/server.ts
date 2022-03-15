import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.post("/questionnaire", (req,res)=>{
    const formData = req.body;
});




app.listen(process.env.PORT, ()=>(console.log( `backend server is listening to PORT ${process.env.PORT}`)))
