//Reducer is like that we concentrate our function in a function in Reducer
//import from action.ts and state.ts
import { AuthAction } from "./action";
import { AuthState } from "./state";

//deafult initial state
//at begining user is null and the user list is empty since no one has registered
function initialState(): AuthState {
    return {
        user: null,
        userPasswordDict: {}
    }
}

//deafult state as initialState()
//AuthState can be switched depends on the action 
//eg. logout->change state user:null
export function authReducer(
    state: AuthState = initialState(),
    action: AuthAction): AuthState {
    switch (action.type) {
        case '@@Auth/logout':
            return { ...state, user: null }
        case '@@Auth/register': {
            if (action.user.username in state.userPasswordDict){
                //this username has been registered
                return state
            }
            //register success
            return{
                //copy state and in userPasswordDict-> add original content copy and add new record
                ...state, userPasswordDict:{
                    ...state.userPasswordDict,[action.user.username]:action.user.password,
                },
            }
            }
            case '@@Auth/login': {
            //if the username is not regiested
            if (!(action.user.username in state.userPasswordDict)) {
                //this username is not registerd
                return state
            }
            if (state.userPasswordDict[action.user.username] !== action.user.username) {
                //wrong password
                return state
            }//login success
            return { ...state, user: { username: action.user.username } }

        }default:
        return state

    }
}
