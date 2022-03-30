import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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


import DaftarCalonPasangan from './pages/DaftarCalonPasangan';
import Profil from './pages/Profil';
import TargetPasangan from './pages/TargetPasangan';
import PasanganContextProvider from './data/PasanganContextProvider';



setupIonicReact();



const App: React.FC = () => {

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  
  };

return(
  <IonApp >
    <IonReactRouter>
    <IonMenu contentId="main">
        <IonHeader>
            <IonToolbar>
              <IonTitle>Gebet App</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
              <IonMenuToggle>
                  <IonItem button routerLink="/calonpasangan">
                      <IonLabel>Daftar Calon Pasangan</IonLabel>
                  </IonItem>
                  <IonItem button routerLink="/targetpasangan">
                      <IonLabel>Target Pasangan</IonLabel>
                  </IonItem>
                  <IonItem button routerLink="/profil">
                      <IonLabel>Profil</IonLabel>
                  </IonItem>
                  <IonItem>
                      <IonLabel>Welcome to Dark Theme</IonLabel>
                     <IonToggle 
                     name='darkMode'
                     onIonChange={toggleDarkModeHandler}
                     />
                  </IonItem>
              </IonMenuToggle>

            </IonList>
        </IonContent>
      </IonMenu>
      <PasanganContextProvider>
      <IonRouterOutlet id="main">
          <Route exact path="/calonpasangan" component={DaftarCalonPasangan} />
          <Route path="/targetpasangan" component={TargetPasangan} />
          <Route path="/profil" component={Profil} />
          <Redirect exact from="/" to="/calonpasangan" />
      </IonRouterOutlet>
      </PasanganContextProvider>
    </IonReactRouter>
  </IonApp>
);
};

export default App;
