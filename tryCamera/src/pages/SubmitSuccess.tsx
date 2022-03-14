import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import './SubmitSuccess.css';

const SubmitSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/tab1" />
          </IonButtons>
          <IonTitle>Completed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        
            <div style={{display:'flex', justifyContent:'center'}} ><IonIcon icon={checkmarkCircleOutline} ></IonIcon></div>
            <br/>
            <div style={{textAlign:'center'}}>The form was submitted sucessfully.</div>
   
      </IonContent>
    </IonPage>
  );
};

export default SubmitSuccess;
