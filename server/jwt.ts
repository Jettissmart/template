import dotenv from 'dotenv';
dotenv.config();

//To prevent you forget to set JWT_SECRET
if (!process.env.JWT_SECRET){
    throw new Error('Missing JWT_SECRET environment variable')
}

export let jwtConfig= {
    jwtSecret: process.env.JWT_SECRET,
    jwtSession: {
        session: false
    }
}