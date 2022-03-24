import { IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton } from "@ionic/react"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

import './FrontPage.scss'
import Footer from "./Footer";

const FrontPage: React.FC = () => {
    return (
        <>
            <HeroImage />
            <Cards />
            <Footer />
        </>
    )
}

const HeroImage = () => {
    type Item = {
        src: string;
    };
    const items: Item[] = [{
        src: require('../assets/images/Hero-beach-boys-text.png')
    }
        // ,
        // {
        //     src: require('../assets/images/Hero-feet-in-sand-text.png')
        // },
        // {
        //     src: require('../assets/images/Hero-view-of-beach-text.png')
        // }
    ]
    return (
        <>
            <IonCard className="heroImage">
                <IonList>
                    {items.map((image, i) => (
                        <IonItem lines="none" key={i}>
                            <IonImg src={image.src} />
                        </IonItem>
                    ))}
                </IonList>
            </IonCard>
        </>
    )
}

const Cards: React.FC = () => {
    interface iPlaceList {
        id: number;
        name: string;
        type: string;
        description: string;
        creation: number | null;
        photo: string;
        likes: number;
        locationIdApi: string;
        locationTypeApi: string;
        createdAt: null;
        updatedAt: null;
    }
    const [apiData, setApiData] = useState<iPlaceList[]>();
    const [typeValue, setTypeValue] = useState("beach")

    useEffect(() => {
        const getData = async () => {
            const url = `https://lp-adventures.herokuapp.com/api/Places`;
            const result = await axios.get(url);
            setApiData(result.data)
        }
        getData();
    }, [setApiData]);

    return (
        <>
            <IonSegment>
                <IonSegmentButton value="beach" onClick={() => { setTypeValue('beach') }}>
                    <IonLabel>Beach</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="restaurant" onClick={() => { setTypeValue('restaurant') }}>
                    <IonLabel>Restaurant</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="place of interest" onClick={() => { setTypeValue('place of interest') }}>
                    <IonLabel>Place of interest</IonLabel>
                </IonSegmentButton>
            </IonSegment>
            {
                <>
                    {apiData && apiData.map((item) => {

                        if (item.type === typeValue) {

                            return (
                                <IonCard className="cardsWrapper" key={item.id}>
                                    <div className="frontPageHeader">
                                        <IonCardHeader>{item.name}</IonCardHeader>
                                        <IonItem lines="none" className="likePlace">
                                            <IonIcon icon="heart-outline"></IonIcon>
                                        </IonItem>
                                    </div>
                                    <IonItem lines="none" className="placesImage">
                                        <IonImg src={item.photo} />
                                    </IonItem>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol>
                                                <IonCardSubtitle>
                                                    <Link className="distance" to={'/page/Map'}><IonIcon icon="walk"></IonIcon>___</Link>
                                                </IonCardSubtitle>
                                            </IonCol>
                                            <IonCol>
                                                <IonCardSubtitle>
                                                    <Link className="readMore" to={`/page/ReadMore/${item.name}`}>Read more</Link>
                                                </IonCardSubtitle>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCard>
                            )
                        }
                    })}
                </>
            }
            <IonCard className="blackToTop">
                <IonCardHeader>You're at the end of our Adventures!</IonCardHeader>
                <IonCardSubtitle>
                    <Link className="blackBtn" to={''}>Back to top!</Link>
                </IonCardSubtitle>
            </IonCard>
        </>
    )
}

export default FrontPage