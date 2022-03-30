import {  IonAvatar, IonButtons, IonCard, IonCardContent,  IonCardHeader,  IonCol,  IonContent, IonGrid, IonHeader,  IonIcon,  IonItem,  IonItemOption,  IonItemOptions,  IonItemSliding,  IonLabel,  IonLoading,  IonMenuButton, IonNote, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { female, heart, personCircleOutline } from 'ionicons/icons';
import { useContext, useRef, useState } from 'react';
import { PasanganContext } from '../data/Pasangan-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import './DaftarCalonPasangan.css'




const DaftarCalonPasangan: React.FC = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const pasanganCtx = useContext(PasanganContext);
    const [loading, setLoading] = useState(false);
   
    const saveToTarget = (pasanganId: string) => {
        console.log("Menambahkan " + pasanganId + " Ke Target Pasangan" );
        const Cocokin = pasanganCtx.pasangans.find((a) => a.id === pasanganId) || null;
        pasanganCtx.addPasangan(Cocokin!!);
        slidingOptionsRef.current?.closeOpened();
        setLoading(true);
      };
 
  return (
    <IonPage>
        <IonLoading
        cssClass="my-custom-class"
        isOpen={loading}
        onDidDismiss={() => {
          setLoading(false);
        }}
        message={"Loading..."}
        duration={500}
      />
      <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>
                    Bosen Jomblo
                </IonTitle>
                <IonItem slot="end" button routerLink="/profil">
                 <IonIcon icon={personCircleOutline} />
                </IonItem>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <Swiper spaceBetween={40} slidesPerView={3} pagination={true}  modules={[Pagination]}>
                {pasanganCtx.pasangans.map(pasangan =>(
                    <SwiperSlide key={pasangan.id}>
                    <IonCard className="highlightCard">
                      <IonCardHeader>
                        <IonAvatar>
                        <img className="gambarCard" src={pasangan.src} />
                        </IonAvatar>
                      </IonCardHeader>
                        <IonCardContent className="ion-text-center">
                            <IonLabel>{pasangan.name}</IonLabel>
                        </IonCardContent>
                    </IonCard>
                    </SwiperSlide>
                ))}
        </Swiper>
                {pasanganCtx.pasangans.map(pasangan =>(
                <IonItemSliding key={pasangan.id} ref={slidingOptionsRef}>
                <IonItemOptions slot="end">
                  <IonItemOption
                    color="secondary"
                    onClick={saveToTarget.bind(null, pasangan.id)}
                  >
                    <IonIcon slot="icon-only" icon={heart} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem>
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonAvatar className="itemGambar">
                          <img src={pasangan.src} />
                        </IonAvatar>
                      </IonCol>
                      <IonCol size="8">
                        <IonRow>
                          <h2>{pasangan.name}</h2>
                        </IonRow>
                        <IonRow>
                          <IonLabel>{pasangan.status}</IonLabel>
                        </IonRow>
                        <IonRow>
                          <IonIcon icon={female} />
                          <IonLabel>{pasangan.gender}</IonLabel>
                        </IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
               </IonItemSliding>
               ))}
            </IonContent>
    </IonPage>
  );
};

export default DaftarCalonPasangan;
