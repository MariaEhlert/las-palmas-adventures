import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
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
        text: string;
        class: string;
    };
    const items: Item[] = [{
        src: require('../assets/images/beach-boys.jpg'), text: 'beach boys', class: 'mySlideshow'
    },
    {
        src: require('../assets/images/beach.jpg'), text: 'beach', class: 'mySlideshow'
    },
    {
        src: require('../assets/images/beach-fod.jpg'), text: 'beach fod', class: 'mySlideshow'
    }]

    //     let mySlide = 0;
    //     carousel();

    // function carousel() {
    //   let i;
    //   let x = document.getElementsByClassName("mySlideshow");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].setAttribute('style', 'display: none')

    //   }
    //   mySlide++;
    //   if (mySlide > x.length) {mySlide = 1}    
    //   x[mySlide-1].setAttribute('style', 'display: block')
    //   setTimeout(carousel, 7000); // Change image every 7 seconds
    // }
    return (
        <>
            <IonCard>
                <IonList>
                    {items.map((image, i) => (
                        <IonItem key={i}>
                            <IonThumbnail slot="start">
                                <IonImg src={image.src} className={image.class} />
                            </IonThumbnail>
                            <IonLabel>{image.text}</IonLabel>
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
                        <IonIcon icon="heart-outline"></IonIcon>
                        {/* <IonIcon icon='heart'></IonIcon> */}
                        <IonItem>
                            <IonImg src={item.photo} />
                        </IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonCardSubtitle>
                                        <Link className="distance" to={'/page/Inbox'}><IonIcon icon="walk"></IonIcon>___</Link>
                                    </IonCardSubtitle>
                                </IonCol>
                                <IonCol>
                                    <IonCardSubtitle>
                                        <Link className="readMore" to={'/page/Inbox'}>Read more</Link>
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