import { IonActionSheet, IonAvatar,IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline, female, personCircleOutline, share, trash } from 'ionicons/icons';
import { useContext, useRef, useState } from 'react';
import  { Pasangan, PasanganContext} from '../data/Pasangan-context';
import "./TargetPasangan.css"

const TargetPasangan: React.FC = () => {
  const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
  const pasanganCtx = useContext(PasanganContext);
  const [remove, setRemove] = useState(false);
  const [selectPasangan, setSelectPasangan] = useState<Pasangan | null>(null);
  const [id, setId] = useState('');

  const DeleteTargetHandler = (id: string) => {
    setRemove(true);
    setId(id)
    console.log("Delete Clicked");
  };

  const DeletingTarget = () => {
    console.log("Deleting Pasangan...")
    pasanganCtx.deletePasangan(id);
  };

  return (
    <IonPage>
        <IonActionSheet
        isOpen={remove}
        onDidDismiss={() => setRemove(false)}
        header="Yakin gak gebet dia lagi ?"
        buttons={[
          {
            text: "Yakin, hapus dari daftar",
            icon: trash,
            handler: () => DeletingTarget()},
          {
            text: "Gak yakin, kembali",
            icon: share,
            handler: () => {slidingOptionRef.current?.closeOpened()
            console.log("Gak jadi Delete")
            }},
        ]}
      >
      </IonActionSheet>
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
        <IonContent>
        {pasanganCtx.tampung.length === 0 ? (
          <IonGrid className="ion-text-center">
            <h4>Anda masih jones ??</h4>
            <IonButton href="/calonpasangan" expand="full">
              CARI GEBETAN
            </IonButton>
          </IonGrid>
        ) : (
          <IonList>
            {pasanganCtx.tampung.map((pasangan) => (
              <IonItemSliding
                key={pasangan.id}
                ref={slidingOptionRef}
              >
                <IonItemOptions slot="end">
                  <IonItemOption
                    color="danger"
                    onClick={DeleteTargetHandler.bind(null, pasangan.id)}
                  >
                    <IonIcon slot="icon-only" icon={closeOutline} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem>
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonAvatar>
                          <img className="gambarTarget" src={pasangan.src} alt="Profile" />
                        </IonAvatar>
                      </IonCol>
                      <IonCol size="8">
                        <IonRow>
                          <h2>{pasangan.name}</h2>
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
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TargetPasangan;