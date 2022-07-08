import express, {Request,Response} from 'express';
import jwtSimple from 'jwt-simple';
import {jwtConfig} from './jwt';
import {comparePassword} from './hash';
import { UserService } from './userService';



export class UserController{
    private router:any;
    constructor(private userService:UserService){

        this.router = express.Router();
        this.router.post('/user/login/password', this.post)
    }
    //get router function as it is a private function
    //in server.ts,   app.use(userController.getRouter())
    getRouter = ()=>this.router

    post = async (req:Request,res:Response)=>{
        try{
            if (!req.body.username || !req.body.password) {
                res.status(401).json({msg:"Wrong Username/Password"});
                return;
            }
            const {username,password} = req.body;
            const user = (await this.userService.getUser(username))[0];
            if(!user || !(await comparePassword({password:password,password_hash:user.password_hash}))){
                res.status(401).json({msg:"Wrong Username/Password"});
                return;
            }
            const payload = {
                id: user.id,
                username: user.username
            };
            const token = jwtSimple.encode(payload, jwtConfig.jwtSecret);
            res.json({
                token: token
            });
        }catch(e){
            console.log(e)
            res.status(500).json({msg:e})
        }
    }
}