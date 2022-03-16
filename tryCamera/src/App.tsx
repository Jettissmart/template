
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
import { clipboard, chatbubbleEllipses, person } from 'ionicons/icons';
import NotMatchPage from './pages/NotMatchPage';
import HomeTab from './pages/HomeTab';
import ContactUsTab from './pages/ContactUsTab';
import ProfileTab from './pages/ProfileTab';

import Details from './pages/Details';
import Question from './pages/Question';
import Photo from './pages/Photo';
import Survey from './pages/Survey';
import SubmitSuccess from './pages/SubmitSuccess';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';



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
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { routes } from './routes';






const App: React.FC = () => (
  <Provider store={store}>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route><NotMatchPage/></Route>
        <Route path={routes.questionnaire} component={Survey} exact={true} />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/register" component={RegisterPage} exact={true} />
        <Route path="/submitSuccess" component={SubmitSuccess} exact={true} />

        <Route path="/question" component={Question} exact={true} />
        <Route path="/photo" component={Photo} exact={true} />
        <Route path="/details" component={Details} exact={true} />
       
       
        <Route>
          <IonTabs>
            <IonRouterOutlet>
              <Route path={routes.tab.home} component={HomeTab} exact={true} />
              <Route path={routes.tab.contactUs} component={ContactUsTab} exact={true} />
              <Route path={routes.tab.profile} component={ProfileTab} />

              <Route path="/tabs/tab2/details" component={Details} />
              <Route path="/" render={() => <Redirect to="/tabs/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tabs/tab1">
                <IonIcon icon={clipboard} />
                <IonLabel>Questionaire</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tabs/tab2">
                <IonIcon icon={chatbubbleEllipses} />
                <IonLabel>Contact Us</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tabs/tab3">
                <IonIcon icon={person} />
                <IonLabel>My Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
      
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </Provider>
);

export default App;
