import { IonButton, IonCardHeader, IonCol, IonIcon, IonImg, IonModal, IonText, IonTitle } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Profile.scss';
import LoginPage from "./Login/LoginForm";
import { useAuth } from "./Login/AuthProvider"

//creating the variable with an React Function Component
const ProfilePage: React.FC = () => {

    const { loginData } = useAuth();
   
    return (
        <>
        {/* using a conditional ternery operator to show login if !loginData else show profile */}
        {!loginData ? <LoginPage /> : <Profile />}

        </>
    )
} 

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    interface favouritesList {
        idUser: number;
        idPlace: string;
        createdAt: null;
        updatedAt: null;
    }
    const [apiData, setApiData] = useState<favouritesList[]>();
    // useEffect(() => {
    //     const getData = async () => {
    //         const url = `localhost:4000/api/favourites`;
    //         const result = await axios.get(url);
    //         setApiData(result.data)
    //     }
    //     getData();
    // }, [setApiData]);


    type Item = {
        src: string;
        text: string;
    };
    const items: Item[] = [{
        src: require('../assets/images/MicrosoftTeams-image.png'), text: 'beach'
    }]
    return (
        <>
            <Link className='profileX' to={'/page/FrontPage'}>
                <IonIcon icon='close-sharp'></IonIcon>
            </Link>
            <IonTitle className='profileTitle'>User Profile</IonTitle>
            {items.map((image, i) => (
                <IonCol className='profileImgWrapper' key={i}>
                    <IonImg className='profileImg' src={image.src} />
                </IonCol>
            ))}
            <div className='profileBtnWrapper'>
                <IonButton className='uploadIcon'>
                    <IonIcon icon="cloud-upload-outline"></IonIcon>
                </IonButton><br />
                <IonButton className='username'> <IonText>Username</IonText> </IonButton><br />
                <IonButton className='changePassword'>Change password</IonButton><br />
                <IonButton onClick={e => setShowModal(true)} className='likedPlaces'>Liked places
                    <IonIcon icon="heart"></IonIcon>
                </IonButton>
                <IonButton className='logOutBtn'>Log out</IonButton><br />
                <IonModal className='modalWrapper'
                    isOpen={showModal}
                    initialBreakpoint={0.5}
                    breakpoints={[0, 0.5, 1]}
                    onDidDismiss={() => setShowModal(false)}>
                    {/* {apiData && apiData.map((item) => { */}
                        {/* return ( */}
                            <>
                                <IonText className='modalContent' > {/* key={item.idUser} */}
                                    {/* <IonCardHeader>{item.idPlace}</IonCardHeader> */}
                                    <IonTitle>La Laja</IonTitle>
                                    <IonTitle>Las Rias Bajas</IonTitle>
                                    <IonTitle>Museo Canario</IonTitle>
                                </IonText>
                            </>
                        {/* ) */}
                    {/* })} */}

                </IonModal>
            </div>

            <Footer />
        </>
    )
}



export default ProfilePage;

