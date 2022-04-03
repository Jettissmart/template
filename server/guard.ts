import {Bearer} from 'permit';
import jwtSimple from 'jwt-simple';
import express from 'express';
//make Route Guard to our APIs such that only authenticated users can login!!
import {jwtConfig} from './jwt';
import { userService } from './main';
import { User } from './services/models';
import { JWTPayload } from './models';

//jwt token in Base64 put in Bearer format
const permit = new Bearer({
    query:"access_token"
})

export async function requireLogin(
                        req:express.Request,
                        res:express.Response,
                        next:express.NextFunction){
    // let token:string
    // try{
    //     token=permit.check(req);
    // }catch(error){
    //     res.status(401).json({error:'Invalid Bearer Token'})
    //     return
    // }
    // try{
    //     let payload = userService.decodeToken(token)
    // }catch(error){
    //     res.status(401).json({error:'Invalid Bearer Token'})

    // }

    try{
        const token = permit.check(req);
        if(!token){
            return res.status(401).json({msg:"Permission Denied"});
        }
        const payload = jwtSimple.decode(token,jwtConfig.jwtSecret);
        // Querying Database is not compulsory
        const user:User = await userService.getUser(payload.id);
        if(user){
            req.user = user;
            return next();
        } else {
            return res.status(401).json({msg:"Permission Denied"});
        }
    }catch(e){
        return res.status(401).json({msg:"Permission Denied"});
    }
}