import {
  IonButtons, IonCard,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu, IonMenuButton,
  IonMenuToggle, IonTitle, IonToolbar
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
    display: true

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
      <IonMenu contentId="main" type="push" >

        <IonContent fullscreen class="profileWrapper">
          <IonCard  class="menu-card">
          <IonList id="inbox-list">
            <IonToolbar class="menu-toolbar">
              <IonButtons slot="end">
                <IonMenuButton />
              </IonButtons>
              {/* name for app  */}
              <IonTitle>Las palmas Adventures</IonTitle>
            </IonToolbar>

            {appPages.map((appPage, index) => {
              return appPage.display ?(
                  <IonMenuToggle key={index} autoHide={false}>
                    <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
              ): null;
            })}
          </IonList>


          </IonCard>
        </IonContent>
      </IonMenu>
  );
};

export default Menu;
