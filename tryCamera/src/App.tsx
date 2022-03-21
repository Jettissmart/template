
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
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';

import { routes } from './routes';
import DefaultPage from './pages/DefaultPage';
import Welcome from './pages/Welcome';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
import { RootState } from './redux/state';

//protected route for Guest
const GuestRoute = (props:{
  exact?:boolean
  path:string
  component:React.FC})=>{
    const isGuest = useSelector((state:RootState)=>!state.auth.user)
    //must use Component instead of componenet
    const Component = props.component
    return (
       <Route exact={props.exact} path={props.path}>
         {isGuest? <Component/>: <Redirect to={routes.tab.home}/>}

    </Route>
    )
}


//protected route for Guest
const UserRoute = (props:{
  exact?:boolean
  path:string
  component:React.FC})=>{
    const isGuest = useSelector((state:RootState)=>!state.auth.user)
    //must use Component instead of componenet
    const Component = props.component
    return (
       <Route exact={props.exact} path={props.path}>
         {!isGuest? <Component/>: <LoginPage/>}

    </Route>
    )
}



const App: React.FC = () => (
  <Provider store={store}>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route><NotMatchPage/></Route>
        <GuestRoute path={routes.login} component={LoginPage} exact={true} />
        <GuestRoute path={routes.register} component={RegisterPage} exact={true} />
        <GuestRoute path={routes.welcome} component={Welcome} exact={true} />

        <UserRoute path={routes.questionnaire} component={Survey} exact={true} />
        <Route path="/submitSuccess" component={SubmitSuccess} exact={true} />
        <Route path="/" component={DefaultPage} exact={true} />
        
        
        <Route path="/question" component={Question} exact={true} />
        <Route path="/photo" component={Photo} exact={true} />
        <Route path="/details" component={Details} exact={true} />
       
        <Route>
          <IonTabs>
            <IonRouterOutlet>
              <Route path={routes.tab.home} component={HomeTab} exact={true} />
              <Route path={routes.tab.contactUs} component={ContactUsTab} exact={true} />
              <UserRoute path={routes.tab.profile} component={ProfileTab} />

              <Route path="/tabs/tab2/details" component={Details} />
              {/* <Route path="/" render={() => <Redirect to="/tabs/tab1" />} exact={true} /> */}
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href={routes.tab.home}>
                <IonIcon icon={clipboard} />
                <IonLabel>Questionaire</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href={routes.tab.contactUs}>
                <IonIcon icon={chatbubbleEllipses} />
                <IonLabel>Contact Us</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href={routes.tab.profile}>
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
