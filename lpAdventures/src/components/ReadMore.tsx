import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonRow, IonText, IonTextarea } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import Footer from "./Footer";
import './ReadMore.scss'

const ReadMorePage: React.FC = () => {
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
    const [apiData, setApiData] = useState<iPlaceList>();
    const { slugName } = useParams<{ slugName: string }>();

    useEffect(() => {
        const getData = async () => {
            const url = `https://lp-adventures.herokuapp.com/api/Places/${encodeURI(slugName)}`;
            const result = await axios.get(url);

            setApiData(result.data)
        }
        getData();
    }, [setApiData]);
    return (
        <>
            {apiData &&
                <IonCard className="detailsCardsWrapper" key={apiData.id}>
                    <IonCardHeader>{apiData.name}</IonCardHeader>
                    <IonItem lines="none">
                        <IonImg src={apiData.photo} />
                    </IonItem>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonCardSubtitle className="detailsDistance">
                                    <Link className="walk" to={'/page/Map'}><IonIcon icon="walk"></IonIcon>___</Link>
                                </IonCardSubtitle>
                            </IonCol>
                            <IonCol>
                                <IonCardSubtitle className="detailsStart">
                                    <Link className="start"  to={`/page/Map/${apiData.latitude}/${apiData.longitude}`  }>Start adventure now!</Link>
                                </IonCardSubtitle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonText>
                        {apiData.type}
                        {apiData.creation}
                    </IonText><br />
                    <IonText>
                        {apiData.description}
                    </IonText>
                    <IonCardSubtitle>
                        <Link className="backToFront" to={'/page/FrontPage'}><IonIcon icon="arrow-back-outline"></IonIcon>Go back all adventures</Link>
                    </IonCardSubtitle>
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