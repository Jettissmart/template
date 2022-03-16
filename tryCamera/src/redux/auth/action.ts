// we can interpret them as 
//there is OOP class Auth, inside the class, there is register method and login method
export function registerAction(
    user:{username:string;
    password:string
    }){
        return {
            type:'@@Auth/register',user
        }

    }

    export function loginAction(
        user:{
            username:string;
            password:string
        }){
            return {
                type:'@@Auth/login',user
            }
    
        }


//logout no input value
        export function logoutAction(){
                return {
                    type:'@@Auth/logout' as const
                }
        
            }

 export type AuthAction =
 | ReturnType<typeof registerAction>
 | ReturnType<typeof loginAction>
 | ReturnType<typeof logoutAction>
