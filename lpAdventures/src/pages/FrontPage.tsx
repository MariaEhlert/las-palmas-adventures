import { IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonThumbnail } from "@ionic/react"
import { Link } from "react-router-dom";

const FrontPage: React.FC = () => {
    return(
        <>
        <HeroImage />
        <Cards />
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
        src: require ('../assets/images/beach-boys.jpg'), text: 'beach boys', class: 'mySlideshow'
    },
    {
        src: require ('../assets/images/erasmusplus.png'), text: 'erasmus', class: 'mySlideshow'

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


    return(
        <>
        <IonContent>
            <IonList>
                {items.map((image, i) =>(
                    <IonItem key={i}>
                        <IonThumbnail slot="start">
                            <IonImg src={image.src} className={image.class}/>
                        </IonThumbnail>
                        <IonLabel>{image.text}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
        </>
    )
}

const Cards = () => {
    return(
        <>
        <IonContent>
            <IonCard>
                <IonCardHeader>Las Canteras</IonCardHeader>
                <IonImg src={require ('../assets/images/beach-boys.jpg')}/>
                <IonIcon name="heart-outline"></IonIcon>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCardSubtitle>
                                {/* <Link to={}>10 min.</Link>  */}
                                <a href="/page/Inbox">10 min.</a>
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle>
                                <a href="/page/Inbox">Read more</a>
                            </IonCardSubtitle>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </IonContent>
        </>
    )
}


export default FrontPage