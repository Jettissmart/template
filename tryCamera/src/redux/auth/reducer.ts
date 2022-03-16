//Reducer is like that we concentrate our function in a function in Reducer
//import from action.ts and state.ts
import { AuthAction } from "./action";
import { AuthState } from "./state";

//deafult initial state
//at begining user is null and the user list is empty since no one has registered
function initialState(): AuthState {
    return {
        user: null,
        userPasswordDict: {},
        registerResult:{type:'idle'},
        loginResult:{type:'idle'}
    }
}

//deafult state as initialState()
//AuthState can be switched depends on the action 
//eg. logout->change state user:null, loginResult back to idle
//login checking and result
//register checking and result
export function authReducer(
    state: AuthState = initialState(),
    action: AuthAction): AuthState {
    switch (action.type) {
        case '@@Auth/logout':
            return { ...state, user: null, loginResult:{type:'idle'} }
        case '@@Auth/register': {
            if (action.user.username in state.userPasswordDict){
                //this username has been registered
                return {...state, registerResult:{type:'fail',
                message:`"${action.user.username}" is already occupied by others`,},
            }
            }
            //register success
            return{
                //copy state and in userPasswordDict-> add original content copy and add new record
                ...state, userPasswordDict:{
                    ...state.userPasswordDict,
                    [action.user.username]:action.user.password,
                },
                registerResult:{
                    type:'success',
                    message:`"${action.user.username}" is registered successfully`,

                },

            }
            }
            case '@@Auth/login': {
            //if the username is not regiested
            if (!(action.user.username in state.userPasswordDict)) {
                //this username is not registerd
                return {...state, loginResult:{
                    type:'fail', 
                    message:`"${action.user.username}" is not registered`,},
                }
            }
            if (state.userPasswordDict[action.user.username] !== action.user.password) {
                //wrong password
                return {...state, loginResult:{
                    type:'fail', 
                    message:`The password for "${action.user.username}" is incorrect`,},
                }
            }//login success
            return { ...state, user: { username: action.user.username },
        loginResult:{
            type:'success',
                    message:`Login as "${action.user.username}" successfully`,
        }, }

        }default:
        return state

    }
}
