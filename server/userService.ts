import{Knex} from 'knex'
import { comparePassword } from './hash'
import { HttpError } from './http-error'
import { JWTPayload, LoginUserWithPasswordDTO, RegisterUserWithPasswordDTO } from './models'
import jwt from 'jwt-simple'
import { jwtConfig } from './jwt'

let SECOND =1000
let MINUTE = SECOND *60
let HOUR = MINUTE*60
let DAY = HOUR*24

export class UserService {
    constructor (private knex:Knex){}

    table(){
        return this.knex('users')
    }

    async getUser(username: string){
        await this.table()
        .select('id','password_hash')
        .where({username:username})
    }

    //create JWT token with 3month valid 
    createToken(user_id:number){
        let payload:JWTPayload ={id:user_id,exp: Date.now()+90*DAY}
        let token:string = jwt.encode(payload, jwtConfig.jwtSecret)
        return token
    }
    //verify the token-> after decode the token,the result is the payload (userid and expiry)
    //try-catch if cannot be decoded, throw error
    decodeToken(token:string){
        let payload:JWTPayload
        try{
          payload =jwt.decode(token, jwtConfig.jwtSecret)
        

        }catch(error){
            throw new HttpError('Invalid JWT token:' + error, 401)
        }
        if(payload.exp <= Date.now()){
            throw new HttpError('Expired JWT token, expired at: ' +payload.exp, 401)
        }
        return payload
       
    }


    async register(user: RegisterUserWithPasswordDTO){
        let rows: any[]= await this.table().insert(user).returning('id')
        let id = rows[0].id as number
        let token:string = this.createToken(id)
        return token
    }

// user can login 
    async login(user: LoginUserWithPasswordDTO){
        let row = await this.table()
        .select('id','password_hash')
        .where({username:user.username})
        .first()

      if(!row){
          throw new HttpError('User not found, username:' + user.username, 401)
      }
      let isMatch = await comparePassword({password:user.password, password_hash:row.password_hash,
      })
      if (!isMatch){
        throw new HttpError('Wrong username or password', 401)
      }
      let token: string = this.createToken(row)
      return token
  
    }
}