import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.scss';
//Import the service to use
import API from "../services/user.service"

// Hook for get all user
import { useUserFetch } from "../hooks/useUserFetch";
const Page: React.FC = () => {

  //Define de hook (is like useState)
  const { state, loading, error } = useUserFetch();
  console.log(state.results)
  
  const { name } = useParams<{ name: string; }>();

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
    
      </IonContent>
    </IonPage>
  );
};

export default Page;
