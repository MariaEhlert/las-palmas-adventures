import {

    IonPopover,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon, IonImg,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem
} from '@ionic/react';
import { useParams } from 'react-router';
import './Page.scss';
import {menu} from "ionicons/icons";
import {useEffect, useState} from "react";


const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();


    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end" >
              <IonMenuButton  />
          </IonButtons>
          {/* name for app  */}
          <IonTitle>Las palmas Adventures</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Page;
