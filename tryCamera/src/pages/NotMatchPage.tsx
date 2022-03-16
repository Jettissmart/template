import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useRouteMatch } from 'react-router';
import { routes } from '../routes';


const email = 'admin@example.com'

const NotMatchPage: React.FC = () => {
const route = useRouteMatch()
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Not Found</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonButton routerLink={routes.tab.home}>Back to Home Page</IonButton>
        <p>You may report this error page to the admin at {' '}
        <a href={'mailto:'+email} target="_blank">
            {email}</a></p>
       <IonText color='danger'>current URL: {route.url}</IonText>
      </IonContent>
      
    </IonPage>
  );
};

export default NotMatchPage;