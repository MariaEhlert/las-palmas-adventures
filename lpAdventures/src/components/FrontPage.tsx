import { IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton } from "@ionic/react"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

import './FrontPage.scss'
import Footer from "./Footer";

//variable with react function component
const FrontPage: React.FC = () => {
    return (
        <>
        {/* here we define the content of the frontpage */}
            <HeroImage />
            <Cards />
            <Footer />
        </>
    )
}

//the hero img are defined inside of this
//if slideshow all would be needed
const HeroImage = () => {
    type Item = {
        src: string;
    };
    const items: Item[] = [{
        //img needs require to work
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

//variable with react function component
const Cards: React.FC = () => {
    //interface for the placelist key and value type defined
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

    //variable that uses the interface iPlaceList
    const [apiData, setApiData] = useState<iPlaceList[]>();
    //this is created to make sure the content starts on beach but can change
    const [typeValue, setTypeValue] = useState("beach")

    //get the places
    useEffect(() => {
        const getData = async () => {
            const url = `https://lp-adventures.herokuapp.com/api/Places`;
            const result = await axios.get(url);
            setApiData(result.data)
        }
        getData();

    //Dependency array with children - this renders if any changes
    }, [setApiData]);

    return (
        <>
        {/* ionSegment is to make a submenu */}
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
                {/* map to get all the places */}
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