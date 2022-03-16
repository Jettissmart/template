import {combineReducers} from 'redux'
import { authReducer } from './auth/reducer';
import { RootState } from "./state";


//<RootSate, action=any>
export const rootReducer = combineReducers<RootState, any>({
    auth: authReducer,
  })
  