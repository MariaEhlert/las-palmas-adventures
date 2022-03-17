import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.scss';
//Import the service to use
import APIUser from "../services/user.service"
import APIPlace from "../services/place.service"
import APIComment from "../services/comment.service"

// Hook for get all registries
import { useUserFetch } from "../hooks/useUserFetch";
import { useCommentFetch } from '../hooks/useCommentFetch';
import { usePlaceFetch } from '../hooks/usePlaceFetch';
import { useFavouriteFetch } from '../hooks/useFavouriteFetch';

const Page: React.FC = () => {

  // Define de hook (is like useState)
  // const { state, loading, error } = useUserFetch();
  // const { state, loading, error } = useCommentFetch();
  // const { state, loading, error } = usePlaceFetch();
  // console.log(state.results)

  // console.log(APIComment.fetchAllCommentsByPlace(1))


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
