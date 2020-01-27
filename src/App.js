import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutPage from './Components/AboutPage/AboutPage';
import NotFoundRoute from './Components/NotFoundRoute/NotFoundRoute';


class App extends React.Component {
  render () {
    return (
    <main>
      <Nav />
      <Switch>
        <Route
          exact
          path={'/'}
          component={LandingPage}
        />
        <Route
          exact
          path={'/about'}
          component={AboutPage}
        />
        <Route
          component={NotFoundRoute}
        />
      </Switch>
    </main>
  );
  }
}

export default App;
