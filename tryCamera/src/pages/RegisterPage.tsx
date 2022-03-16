import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from '@ionic/react'
import { getByPlaceholderText } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
//   import { useDispatch, useSelector } from 'react-redux'
//   import { Link } from 'react-router-dom'
//   import { APIResult } from '../components/APIResult'
//   import { registerAction } from '../redux/auth/action'
//   import { reduxObjects, reduxObjectsProxy } from '../redux/reducer'
//   import { RootState } from '../redux/state'
//   import { routes } from '../routes'
//   import './RegisterPage.css'

type FormState = {
  username: string
  password: string
  confirm_password: string
  chronic_disease: string
  gender: string
  birthday: string
  mobile: string
  email: string
}

const RegisterPage: React.FC = () => {
  // const dispatch = useDispatch()
  const [presentAlert] = useIonAlert()
  // const result = useSelector((state: RootState) => state.authObject.registerResult)
  // const auth = useSelector((state: RootState) => state.authObject.getDispatch())
  // const auth = reduxObjects.auth.mount()
  // const auth = reduxObjectsProxy.auth
  // const result = auth.registerResult

  //put it within component, so it is local state no need props.formState
  const [formState, setFormState] = useState<FormState>({
    username: '',
    password: '',
    confirm_password: '',
    chronic_disease: '',
    gender: '',
    birthday: '',
    mobile: '',
    email: '',
  })
  const messages = {
    username:
      formState.username.length < 3
        ? 'username should be at least 3 letters'
        : '',
    password:
      formState.password.length < 8
        ? 'password should be at least 8 letters'
        : '',
    confirm_password:
      formState.confirm_password !== formState.password
        ? 'password not matched'
        : '',
    chronic_disease:
      !formState.chronic_disease
        ? ''
        : '',
    gender:
      !formState.gender
        ? 'required'
        : '',
    birthday:
      !formState.birthday
        ? 'it helps us to calculate your age'
        : '',
    mobile:
      !formState.mobile && !formState.email
        ? 'please provide either your mobile or email for contact'
        : '',
    email:
      !formState.mobile && !formState.email
        ? 'please provide either your mobile or email for contact'
        : '',
  }
  function getHintField() {
    for (let [key, value] of Object.entries(formState)) {
      const field = key as keyof FormState
      const validateMessage = messages[field]
      if (!value || validateMessage) {
        return field
      }
    }
  }
  const hintField = getHintField()

  const submit = () => {
    console.log('submit formState:', formState)
    const invalidMessage = Object.values(messages).find(
      message => message.length > 0,
    )
    if (invalidMessage) {
      presentAlert(invalidMessage, [{ text: 'Dismiss', role: 'cancel' }])
      return
    }
    // dispatch(registerAction(formState))
    // auth.register(formState)
  }

  const renderField = (props: {
    field: keyof FormState
    inputType: 'text' | 'password' | 'date' | 'number' | 'email'
  }) => {
    const { field, inputType } = props
    const validateMessage = messages[field]
    const value = formState[field]
    const title = field
      .split('_')
      .map(word => word[0].toLocaleUpperCase() + word.slice(1))
      .join(' ')
    return (
      <>
        <IonItem>
          <IonLabel
            color={
              !value
                ? hintField === field
                  ? 'primary'
                  : undefined
                : validateMessage
                  ? 'danger'
                  : undefined
            }
            position="floating"
          >
            {title}
          </IonLabel>
          <IonInput
            placeholder={''}
            type={inputType}
            value={value}
            onIonChange={e =>
              setFormState({ ...formState, [field]: e.detail.value || '' })
            }
          ></IonInput>
        </IonItem>
        <IonText color={!value ? 'medium' : 'danger'}>
          {validateMessage}
        </IonText>
      </>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>

          {renderField({ field: 'username', inputType: 'text' })}
          {renderField({ field: 'password', inputType: 'password' })}
          {renderField({ field: 'confirm_password', inputType: 'password' })}
          {renderField({ field: 'chronic_disease', inputType: 'text' })}
          {renderField({ field: 'gender', inputType: 'text' })}
          {renderField({ field: 'birthday', inputType: 'date' })}
          {renderField({ field: 'mobile', inputType: 'number'})}
          {renderField({ field: 'email', inputType: 'email' })}
        </IonList>
        <IonButton expand="block" onClick={submit}>
          Submit
        </IonButton>
        {/* <APIResult result={result} /> */}

        {/* <p>
             Already registered? <Link to={routes.login}>Go to Login Page</Link>
           </p> */}
      </IonContent>
    </IonPage>
  )
}

export default RegisterPage
