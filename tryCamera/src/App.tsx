import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { square, triangle, images, clipboard } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';
import Question from './pages/Question';
import Photo from './pages/Photo';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route path="/question" component={Question} exact={true} />
        <Route path="/photo" component={Photo} exact={true} />

        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tabs/tab1" component={Tab1} exact={true} />
              <Route path="/tabs/tab2" component={Tab2} exact={true} />
              <Route path="/tabs/tab2/details" component={Details} />
              <Route path="/tabs/tab3" component={Tab3} />
              <Route path="/" render={() => <Redirect to="/tabs/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tabs/tab1">
                <IonIcon icon={clipboard} />
                <IonLabel>Questionaire</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tabs/tab2">
                <IonIcon icon={images} />
                <IonLabel>Photos</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tabs/tab3">
                <IonIcon icon={square} />
                <IonLabel>Tab Three</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
      
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
