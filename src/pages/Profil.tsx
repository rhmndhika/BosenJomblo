import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonMenuButton, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {  personCircleOutline } from 'ionicons/icons';
import Dea1 from '../gambar/Dea1.jpg';
import ProfilePicture from '../gambar/profile-pic_3.png';

const Profil: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>
                    Bosen Jomblo
                </IonTitle>
                <IonItem slot='end' button routerLink="/profil">
                 <IonIcon icon={personCircleOutline} />
                </IonItem>
            </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <IonCard style={{
          border: '2px solid'
        }}>
          <IonCardHeader>
            <img src={ProfilePicture} />
          </IonCardHeader>
          <IonCardContent>
              <IonCardTitle style={{textAlign: 'center'}}>Rahmandhika<br></br>00000040733</IonCardTitle>
          <IonButton href="https://www.instagram.com/rhmndhika"  expand="full" >
            INSTAGRAM
            </IonButton>
          <IonButton href=" https://github.com/rhmndhika" expand="full">
            GITHUB
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profil;
