//Auth is used to store the state whether it is logged in
//user identity:null or AuthUser with username
export type AuthState ={
    user:null|AuthUser
    //username -> password
    userPasswordDict: Record<string, string>
   }
   
   //key-value pair  username -> password
   export type AuthUser ={
       username:string
   }