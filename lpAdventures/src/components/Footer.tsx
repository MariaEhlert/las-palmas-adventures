import { IonContent, IonList, IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/react"

const Footer: React.FC = () => {

    type Item = {
    src: string;
    text: string;
    };
    const items: Item[] = [
        { src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }
    ];
    
    return(
    <>
        <IonContent>
            <IonList>
                {items.map((image, i) => (
                    <IonItem key={i}>
                        <IonThumbnail slot="start">
                            <IonImg src={image.src} />
                        </IonThumbnail>
                        <IonLabel>{image.text}</IonLabel>
                    </IonItem>
             ))}
            </IonList>
        </IonContent>
    </>
    )
}



export default Footer;