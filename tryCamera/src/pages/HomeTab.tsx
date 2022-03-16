import React from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './HomeTab.css';
import { RootState } from '../redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/auth/action';


const Guest = '(guest)'

const HomeTab: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.user?.username || '(guest)',)
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutAction)
  }
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Questionaire</IonTitle>
          <IonText slot="end" className="ion-padding" color="primary">{username}</IonText>
          <IonText slot="end">{username === Guest ?
        <IonButton routerLink='/login' fill='outline' color='tertiary'>Login</IonButton>
        : <IonButton onClick={logout} fill='outline' color='dark'>Logout</IonButton>
      }</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-text-center">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homepage</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <h1>智能舌診問卷</h1>
        <h1>I-TONGUE Questionaire</h1>


        <h3>Steps to follow:</h3>
        <p>填寫問卷只需三分鐘
          <br />即可得知你個人體質及適合用什麼中藥
        </p>

        <div>
          <ol className="step">
            <li>註冊基本資料
            </li>
            <li>指出你的症狀</li>
            <li>上載舌照</li>
            <li>獲得測試結果</li>
            <li>諮詢中醫師</li>

            {/* <li>basic information
            </li>
            <li>report symptoms</li>
            <li>upload the photo of your tongue</li>
            <li>recieve your test result</li>
            <li>consult Chinese medical doctor</li> */}

          </ol>

        </div>

        <IonButton color="primary" href="/home">
          開始舌診評測
        </IonButton>

      </IonContent>
      
    </IonPage>
  );
};

export default HomeTab;


