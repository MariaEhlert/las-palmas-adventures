import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
//Import the service to use
import APIUser from "../services/user.service"
import APIPlace from "../services/place.service"
import APIComment from "../services/comment.service"

// Hook for get all registries
import { useUserFetch } from "../hooks/useUserFetch";
import { useCommentFetch } from '../hooks/useCommentFetch';
import { usePlaceFetch } from '../hooks/usePlaceFetch';
import { useFavouriteFetch } from '../hooks/useFavouriteFetch';
import FrontPage from '../components/FrontPage';

const Front_Page: React.FC = () => {
  
  

  // Define de hook (is like useState)
  // const { state, loading, error } = useUserFetch();
  // const { state, loading, error } = useCommentFetch();
  // const { state, loading, error } = usePlaceFetch();
  // console.log(state.results)

  // console.log(APIComment.fetchAllCommentsByPlace(1))

  const formData = new URLSearchParams();
        formData.append('name', "admin" );
        formData.append('password',"admin" );

console.log(APIUser.sign(formData));

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
        <FrontPage />
      </IonContent>
    </IonPage>
  );
};

export default Front_Page;
