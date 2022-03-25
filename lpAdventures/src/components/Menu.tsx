import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.scss';


//Creating an interface where we set the keys and values we'll need for App page
interface AppPage {
  url: string;
  title: string;
  display: any;
}

// variable for the navigation where we use the interface and fill in the values 
const appPages: AppPage[] = [
  {
    title: 'Adventures',
    url: '/page/FrontPage',
    display: true
  },
  {
    title: 'Profile',
    url: '/page/Profile',
    display: true

  },
  {
    title: 'Map',
    url: '/page/Map',
    display: false

  },
  {
    title: 'ReadMore',
    url: '/page/ReadMore',
    display: false

  }
];


//variable with a react function component
const Menu: React.FC = () => {
  const location = useLocation();

  //The menu returned 
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return appPage.display ?(
              
              //here the menu toggles between visable to hidden
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ): null;
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
