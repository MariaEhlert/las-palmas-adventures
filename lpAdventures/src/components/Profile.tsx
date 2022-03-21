import { IonButton, IonCol, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonTitle } from '@ionic/react';
import Footer from './Footer';
import './Profile.scss';

const ProfilePage = () => {
    type Item = {
        src: string;
        text: string;
    };
    const items: Item[] = [{
        src: require('../assets/images/MicrosoftTeams-image.png'), text: 'beach boys'
    }]
    return (
        <>
            <IonLabel className='profileX'>
                <IonIcon icon='close-sharp'></IonIcon>
            </IonLabel>
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
                <IonButton className='likedPlaces'>Liked places <IonIcon icon="heart-outline"></IonIcon></IonButton><br />
                <IonButton className='logOutBtn'>Log out</IonButton><br />
            </div>
            <Footer />
        </>
    )
}
export default ProfilePage