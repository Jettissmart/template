import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './HomeTab.css';
import { RootState } from '../redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/auth/action';
import { routes } from '../routes';
import { appName } from '../config';


const Guest = '(guest)'

const Welcome: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.user?.username || '(guest)',)
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutAction)
  }
  return (

    <IonPage>

      <IonContent fullscreen className="ion-padding ion-text-center">
        <img style={{height:'30%'}}src='/assets/image/firstImage.png'></img>
        <p>Welcome to {appName}</p>
        <div>
          <h1>智能舌診問卷</h1>
          <h1>I-TONGUE Questionaire</h1>

          <p>填寫問卷只需三分鐘
            <br />即可得知你個人體質及適合用什麼中藥
          </p>
          </div>
      
       <IonButton color="primary" routerLink={routes.login}>
          Login
        </IonButton>

        <IonButton fill='outline' color="primarylight" routerLink={routes.register}>
          I'm new user
        </IonButton>
        

      </IonContent>

    </IonPage>
  );
};

export default Welcome;


