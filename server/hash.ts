import {compare,hash} from 'bcryptjs'

let ROUND =12

export async function hashPassword(password:string){
    let digest = await hash(password,ROUND)
    // console.log(digest.length)
    return digest
}

//use object to include password and password_hash, no need to know which one is the first
export async function comparePassword(o:{password:string, password_hash:string}){
    let isMatch:boolean = await compare(o.password,o.password_hash)
    return isMatch
}