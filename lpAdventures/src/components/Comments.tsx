import { IonButton, IonCard, IonLabel, IonText, IonTextarea } from "@ionic/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Comments.scss'


//variable with react function component
const Comments: React.FC = () => {
    
    //interface for the comment list key and value
    interface iCommentsList {
        idUser: number;
        idPlaces: number;
        text: string;
        date: any;
    }

    //variable that uses the interface iCommentsList
    const [apiData, setApiData] = useState<iCommentsList[]>();
    //variable slugName that uses the params where slugName is a string
    const { slugName } = useParams<{ slugName: string }>();


    //getting the comments
    useEffect(() => {
        const getComments = async () => {
            const url = `https://lp-adventures.herokuapp.com/api/Places/${encodeURI(slugName)}`;
            const result = await axios.get(url);

            const urlComments = `https://lp-adventures.herokuapp.com/api/Comments/Place/${result.data.id}`;
            const resultComments = await axios.get(urlComments);

            setApiData(resultComments.data)
        }
        getComments();
    //Dependency array with children - this renders if any changes
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

