import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import axios from "axios";
import { useRef } from "react";
import { useAuth } from "./AuthProvider"


//variable with an React Function Component
const LoginPage: React.FC = () => {
    return (
        <>
            <LoginForm/>
        </>
    )
}
//variable with an React Function Component
const LoginForm:React.FC = () => {

    //calls state hook to logindata
    const { loginData, setLoginData } = useAuth();
    

    //UseRef is used to access a DOM element directly without rendering
    const nameRef = useRef<HTMLIonInputElement>(null)
    const passwordRef = useRef<HTMLIonInputElement>(null)

    //an async function to handle the login
    const handleLogin = async () => {
        
        let userInput:any = new URLSearchParams()
        userInput.append('name', nameRef.current!.value)
        userInput.append('password', passwordRef.current!.value)
        
        let url = "http://localhost:4000/api/users/signin"
        let result = await axios.post(url, userInput)
        // console.log(result);
        
        handleLocalData(result.data)
        
    }

    //a function to save token to lacalStorage
    const handleLocalData = (res:any) => {
        
        if(!res.message) {            
            setLoginData(res)
            localStorage.setItem('token', JSON.stringify(res))
        }
    }
    
    return(
        <>
        {/* here we show the login form unless the user is logged in then we show null */}
        {!loginData ? (
            <IonList>
                <IonItem lines="none">
                    <IonLabel position="floating">Name: </IonLabel>
                    <IonInput ref={nameRef}></IonInput>
                </IonItem>
                <IonItem lines="none">
                    <IonLabel position="floating">password </IonLabel>
                    <IonInput ref={passwordRef} type="password"></IonInput>
                </IonItem>
                <IonItem lines="none">
                    <IonButton onClick={handleLogin}>Login</IonButton>
                </IonItem>
            </IonList>
        )
        : null
    }
        </>
    )
}


export default LoginPage