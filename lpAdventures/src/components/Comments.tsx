import { IonButton, IonCard, IonLabel, IonText, IonTextarea } from "@ionic/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Comments.scss'

const Comments: React.FC = () => {
    interface commentsList {
        idUser: number;
        idPlaces: number;
        text: string;
        date: any;
    }

    const [apiData, setApiData] = useState<commentsList>();
    const { slugName } = useParams<{ slugName: string }>();

    
    useEffect(() => {
        const getComments = async () => {
            const url = `http://localhost:4000/api/comments/${encodeURI(slugName)}`;
            const result = await axios.get(url);

            setApiData(result.data)
        }
        getComments();
    }, [setApiData]);

    useEffect(() => {
        const postComment = async () => {
            const url = 'http://localhost:4000/api/comments';
            const result = await axios.post(url);
        }
        postComment();
    })
    
    return (
        <>
            {/* {apiData && */}
                <IonCard>
                    <IonLabel position="stacked">___ comments</IonLabel>
                    <IonTextarea></IonTextarea>
                    <IonButton>Post comment</IonButton>
                    <IonText>
                        {/* {apiData.text} */}
                    </IonText>
                </IonCard>
            {/* } */}
        </>

    )
}
export default Comments

