import { IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonRow, IonText } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import Footer from "./Footer";
import './ReadMore.scss'


//the login variable with an react function component
const ReadMorePage: React.FC = () => {

    //interface with key and value
    interface iPlaceList {
        id: number;
        name: string;
        type: string;
        description: string;
        creation: number | null;
        photo: string;
        likes: number;
        latitude: number;
        longitude: number;
    }
    
    //variable that uses the interface iPlaceList
    const [apiData, setApiData] = useState<iPlaceList>();
    //variable slugName that uses the params where slugName is a string
    const { slugName } = useParams<{ slugName: string }>();


    //getting the places for read more
    useEffect(() => {
        const getData = async () => {
            const url = `https://lp-adventures.herokuapp.com/api/Places/${encodeURI(slugName)}`;
            const result = await axios.get(url);

            setApiData(result.data)
        }
        getData();

    //Dependency array with children - this renders if any changes
    }, [setApiData]);

    return (
        <>
            {apiData &&
                <IonCard className="detailsCardsWrapper" key={apiData.id}>
                    <IonCardHeader>{apiData.name}</IonCardHeader>
                    <IonItem lines="none" className="placesImage">
                        <IonImg src={apiData.photo} />
                    </IonItem>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonCardSubtitle className="detailsDistance">
                                    <Link className="walk" to={'/page/Map'}><IonIcon icon="walk"></IonIcon>10</Link>
                                </IonCardSubtitle>
                            </IonCol>
                            <IonCol>
                                <IonCardSubtitle className="detailsStart">
                                    <Link className="start"  to={`/page/Map/${apiData.latitude}/${apiData.longitude}`  }>Start adventure now!</Link>
                                </IonCardSubtitle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonText className="readMoreType">
                        {apiData.type} | {apiData.creation}
                    </IonText><br/>
                    <div className="readMoreDescription">
                        <IonText >{apiData.description}</IonText>
                    </div>
                    <div className="backWrapper">
                        <Link className="backToFront" to={'/page/FrontPage'}><IonIcon icon="arrow-back-outline"></IonIcon>Go back all adventures</Link>
                    </div>
                    <IonText className="seeLikes">
                        <IonIcon icon="heart"></IonIcon>
                        {apiData.likes} Likes
                    </IonText>
                </IonCard>
            }
            <Comments />

            <IonCard className="blackToTop">
                <IonCardHeader>You're at the end of our Adventures!</IonCardHeader>
                <IonCardSubtitle>
                    <Link className="blackBtn" to={''}>Back to top!</Link>
                </IonCardSubtitle>
            </IonCard>
            <Footer />
        </>
    )
}
export default ReadMorePage