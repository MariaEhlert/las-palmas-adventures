import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import FrontPage from '../components/FrontPage';
import './Page.scss';

const Page: React.FC = () => {
  
  


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
        <FrontPage />
      </IonContent>
      {/* <Footer /> */}
    </IonPage>
  );
};

export default Page;
