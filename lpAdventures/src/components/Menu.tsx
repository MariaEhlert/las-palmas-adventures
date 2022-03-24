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

interface AppPage {
  url: string;
  title: string;
  display: any;
}

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



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
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
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
