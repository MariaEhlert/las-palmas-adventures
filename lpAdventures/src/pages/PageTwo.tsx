import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import './Page.scss';

const PageTwo: React.FC = () => {
  
  


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
      <IonContent fullscreen className='profileWrapper'>
        <IonHeader collapse="condense">
        </IonHeader>
        <Profile />
      </IonContent>
      {/* <Footer /> */}
    </IonPage>
  );
};

export default PageTwo;