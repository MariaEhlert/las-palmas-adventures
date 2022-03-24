import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './components/Main.scss'
import Menu from './components/Menu';
import Front_Page from './pages/Front_Page';
import Profile_Page from './pages/Profile_Page';
import Map_Page from './pages/Map_Page';
import ReadMore_Page from './pages/ReadMore_Page';





setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/page/FrontPage" />
            </Route>

            <Route path="/page/FrontPage" exact={true}>
              <Front_Page />
            </Route>

            <Route path="/page/Profile" exact={true}>
              <Profile_Page />
            </Route>

            <Route path="/page/Map" exact={true}>
              <Map_Page />
            </Route>

            <Route path="/page/ReadMore/:slugName" exact={true}>
              <ReadMore_Page />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
