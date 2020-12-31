import { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import customHistory from './utils/history';

import {
  FlexBox,
  ShellBar,
  ThemeProvider,
  Avatar,
  ShellBarItem,
  FlexBoxWrap
} from '@ui5/webcomponents-react';


import { spacing } from '@ui5/webcomponents-react-base';
import { LeftMainNav } from './Components/LeftMainNav';
import { LoadingComponent } from './Components/LoadingComponent';

import "@ui5/webcomponents-icons/dist/add.js";

const HomePage = lazy(() => import('./pages/HomePage'));
const AnalyticalPage = lazy(() => import('./pages/AnalyticalPage'));
const ProgressPage = lazy(() => import('./pages/ProgressPage'));


function App() {

  const avatarImage = process.env.PUBLIC_URL + 'logo192.png';
  const logoImage = process.env.PUBLIC_URL + 'logo512.png';

  const handleLogoClick = () => {

    customHistory.push('/');
  };
   

  return (
    <Router history={customHistory}>

      <Suspense fallback={<LoadingComponent active={true}/>}>

          <ThemeProvider>

            <ShellBar
              logo={<img src={logoImage} alt='logo' />}
              profile={<Avatar image={avatarImage} />}
              primaryTitle="UI5 Web Components for React"
              onLogoClick={handleLogoClick}
            >

              <ShellBarItem icon="add" text="Add" />

            </ShellBar>

            <FlexBox            
              wrap={FlexBoxWrap.Wrap}
              style={spacing.sapUiContentPadding}
            >
              <LeftMainNav/>
              <Switch>

                <Route exact path={'/'} component={ (props) => <HomePage {...props} /> }/>
                <Route path={'/analytic'} component={ (props) => <AnalyticalPage {...props} /> } />
                <Route path={'/progress'} component={ (props) => <ProgressPage {...props}/> } />

              </Switch>            

            </FlexBox>

          </ThemeProvider>

      </Suspense>

    </Router>

  );
}

export default App;
