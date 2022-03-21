import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react'
import React, { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { APIResult } from '../components/APIResult'
import { appName } from '../config'
import { loginAction } from '../redux/auth/action'
import { RootState } from '../redux/state'
import { routes } from '../routes'

export let  post  = async (url:string, body?:any) =>{
  let origin = 'http://localhost:8100'
  url = origin + url

  console.log('POST', url,body)
  try{
    let  res  = await fetch(url, {
      method:'POST',
      headers:{'Content-Type': 'application/jon'},
      body:JSON.stringify(body),
    })
    let json = await res.json()
    return json

  }catch (error){
    return {error:String(error)}
  }
}


  
const LoginPage: React.FC = () => {
  const result = useSelector((state:RootState)=>state.auth.loginResult)
  const dispatch = useDispatch()
  const login = async (e: FormEvent)=>{
     e.preventDefault();
     let form = e.currentTarget as any
     let user = {
       username:form.username.value,
       password: form.password.value,
     }
     let result = await post('/login', user)
     console.log('login result',result)
     dispatch(loginAction(user))
   }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <form onSubmit={login}>
            <div>
              <label>
                username:
                <input name="username" type="text"></input>
              </label>
            </div>
            <div>
              <label>
                password:
                <input name="password" type="password"></input>
              </label>
            </div>
            <div>
              <input type="submit" value="login"></input>
            </div>
            <APIResult result={result} />
          </form>
  
          <p>
            New to {appName}? <Link to={routes.register}>Register an account</Link>
          </p>
        </IonContent>
      </IonPage>
    )
}
  
  export default LoginPage

