import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/Footer';
import LogIn from '../components/LogIn';
import './Page.scss';

const PageTree: React.FC = () => {
  
  


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          {/* name for app  */}
          <IonTitle>Las palmas Adventures</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <LogIn />
      </IonContent>
      {/* <Footer /> */}
    </IonPage>
  );
};

export default PageTree;