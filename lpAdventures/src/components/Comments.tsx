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

    const [apiData, setApiData] = useState<commentsList[]>();
    const { slugName } = useParams<{ slugName: string }>();

    useEffect(() => {
        const getComments = async () => {
            const url = `https://lp-adventures.herokuapp.com/api/Places/${encodeURI(slugName)}`;
            const result = await axios.get(url);

            const urlComments = `https://lp-adventures.herokuapp.com/api/Comments/Place/${result.data.id}`;
            const resultComments = await axios.get(urlComments);

            setApiData(resultComments.data)
        }
        getComments();

    }, [setApiData]);

    return (
        <>
            <IonCard className="commentsWrapper">
                <IonLabel className="commentsLabel" position="stacked">Comments</IonLabel>
                <IonTextarea placeholder="Write a comment here"></IonTextarea>
                <IonButton>Post comment</IonButton>
                    {apiData && apiData.map(item => {
                        return (
                            <IonText className="comments" key={item.idPlaces}>
                                <div>{item.text}</div>
                            </IonText>
                        )
                    })
                    }
            </IonCard>
        </>

    )
}
export default Comments

