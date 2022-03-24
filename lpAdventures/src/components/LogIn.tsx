import { IonHeader } from '@ionic/react'
import Footer from './Footer'
import './LogIn.scss'

//the login variable with an react function component
const LogIn: React.FC = () => {
    return (
        <>
            {/* making sure the header and footer are on the site */}
            <IonHeader>Login</IonHeader>
            <Footer />
        </>
    )
}
export default LogIn