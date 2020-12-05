import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './styles/bootstrap.scss';
import './styles/app.scss';
import './assets/vendors/style';

import SignIn from './container/SignIn';
function App() {
  return (
    <Router>
      <div className="app-main">
        <Switch>
          <Route exact path={'/'} component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
