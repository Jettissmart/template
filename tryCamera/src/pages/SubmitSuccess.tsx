import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import './SubmitSuccess.css';
import { routes } from '../routes';

const SubmitSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab/home" />
          </IonButtons>
          <IonTitle>Completed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        
            <div style={{display:'flex', justifyContent:'center'}} ><IonIcon style={{fontSize:'80px', color:'rgb(88, 196, 66)'}} icon={checkmarkCircleOutline} ></IonIcon></div>
            <br/>
            <div style={{textAlign:'center'}}>The form was submitted sucessfully.</div>
            <div style={{textAlign:'center'}}>你已成功提交!</div>
            {/* <div style={{display:'flex', justifyContent:'center'}}>
              <IonButton color="secondary"  routerLink={routes.tab.home}>Go back to home page</IonButton>
              </div> */}
              <div style={{display:'flex', justifyContent:'center'}}>
              <IonButton color="secondary"  routerLink={routes.tab.home}>返回主頁</IonButton>
              </div>
   
      </IonContent>
    </IonPage>
  );
};

export default SubmitSuccess;
