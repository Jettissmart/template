import React from 'react';
import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonItemOptions, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



const Tab1: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Questionaire</IonTitle>
          <IonIcon></IonIcon>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homepage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>智能舌診問卷</h1>
        <h1>I-TONGUE Questionaire</h1>
        

        <h3>Steps to follow:</h3>
        <p>填寫問卷只需三分鐘
          <br />即可得知你個人體質及適合用什麼中藥
        </p>

        <div>
          <ol className="step">

            <li>basic information
            </li>
            <li>report symptoms</li>
            <li>upload the photo of your tongue</li>
            <li>recieve your test result</li>
            <li>consult Chinese medical doctor</li>
            
          </ol>

        </div>

        <IonButton color="primary" href="/question">
          開始舌診評測
        </IonButton>

      </IonContent>





    </IonPage>
  );
};

export default Tab1;
