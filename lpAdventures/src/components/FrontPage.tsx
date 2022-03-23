import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

import './FrontPage.scss'
import Footer from "./Footer";
import ReadMorePage from "./ReadMore";

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
            <IonCard>
                <IonList>
                    {items.map((image, i) => (
                        <IonItem key={i}>
                            {/* <IonThumbnail slot="start"> */}
                                <IonImg src={image.src} />
                            {/* </IonThumbnail> */}
                            {/* <IonLabel>{image.text}</IonLabel> */}
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
            const url = `http://localhost:4000/api/Places`;
            const result = await axios.get(url);
            setApiData(result.data)
        }
        getData();
    }, [setApiData]);

    
    return (
        <>
        <IonToolbar className="submenu">
            <IonGrid>
                <IonRow>
                    <IonCol size="2" offset="0">
                        <IonButton onClick={() => {setTypeValue('beach')}}>Beach</IonButton>
                    </IonCol>
                    <IonCol size="2" offset="0.5">
                        <IonButton onClick={() => {setTypeValue('restaurant')}}>Restaurant</IonButton>
                    </IonCol>
                    <IonCol size="2" offset="2">
                        <IonButton onClick={() => {setTypeValue('place of interest')}}>Place of interest</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
        {            
        <>
            {apiData && apiData.map((item) => {
                
                if(item.type === typeValue){

                return (
                    <IonCard className="cardsWrapper" key={item.id}>
                        <IonCardHeader>{item.name}</IonCardHeader>
                        <IonItem className="likePlace">
                            <IonIcon icon="heart-outline"></IonIcon>
                        </IonItem>
                        {/* <IonIcon icon='heart'></IonIcon> */}
                        <IonItem>
                            <IonImg src={`http://${item.photo}`}/>
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