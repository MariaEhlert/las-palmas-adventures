import { IonButton, IonCol, IonIcon, IonImg, IonModal, IonText, IonTitle } from '@ionic/react';
import { useState } from 'react';
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
//the modal for favorites
const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    type Item = {
        src: string;
        text: string;
    };

    //the array for profile img
    const items: Item[] = [{
        src: require('../assets/images/Profile-picture.png'), text: 'flower'
    }]
    return (
        <>
        {/* the ionic setup of the profile */}
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
                
                {/* Modal */}
                <IonModal className='modalWrapper'
                    isOpen={showModal}
                    initialBreakpoint={0.5}
                    breakpoints={[0, 0.5, 1]}
                    onDidDismiss={() => setShowModal(false)}>
                            <>
                                <IonText className='modalContent' >
                                    <IonTitle>La Laja</IonTitle>
                                    <IonTitle>A Raices</IonTitle>
                                    <IonTitle>Museo Canario</IonTitle>
                                </IonText>
                            </>
                </IonModal>
            </div>

            <Footer />
        </>
    )
}



export default ProfilePage;

