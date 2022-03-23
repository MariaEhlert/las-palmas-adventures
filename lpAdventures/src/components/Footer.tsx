import { IonCard, IonList, IonImg, IonLabel, IonGrid, IonRow, IonCol } from "@ionic/react"
import './Footer.scss'

//creating the variable with an React Function Component
const Footer: React.FC = () => {

    //Defining the keys and properties of Item
    type Item = {
    src: string;
    alt: string;
    label: string;

    };
    
    // setting const items to Item [] and defining the src, alt-tag
    const items: Item[] = [
        { src: require('../assets/images/erasmusplus.png'), alt: 'Erasmus+ Logo', label: 'Sponsored by' },
        { src: require('../assets/images/Global-Goals.png'), alt: '17 World Goals Logo', label: 'Inspired by' }
    ];
    
    return(
    <>
        <IonCard className="footerGridWrapper">
                {items.map((image, i) => (
                    <IonList className="footerList" key={i}>
                        <IonGrid>
                            <IonRow>
                                <IonCol className="footerCol">
                                    <IonLabel className="footerText">{image.label}</IonLabel>
                                    <IonImg className="footerImg" src={image.src} alt={image.alt}/>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>
             ))}
        </IonCard>
    </>
    )
}



export default Footer;