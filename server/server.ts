import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import knex from './knex';
dotenv.config();

const app = express();
app.use(express.urlencoded());//body
app.use(express.json());//json

app.get("/questions",async (req:Request,res:Response)=>{
    const questions = await knex("question").select("*");
    res.json(questions); //[{id:1,question}]
});

app.post("/questionnaire",async (req:Request,res:Response)=>{
    const formData = req.body;//<-React 俾張form
    
    //SELECT * FROM question WHERE question = 'How are you?';
    //const questionPool = await knex("question").select("*").where("id","=",formData.question_id);

    await knex("case").insert([
        {
            patient_id:??,
            question_id:formData[0].question_id,
            answer:??
        },
        {
            patient_id:??,
            question_id:??,
            answer:??
        }]);
    res.json({success:true});//<- 回應React
});

app.listen(process.env.PORT,()=>{
    console.log(`The backend server is started at ${process.env.PORT}`);
})