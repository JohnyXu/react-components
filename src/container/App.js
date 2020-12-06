import React from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import '../styles/bootstrap.scss';
import '../styles/app.scss';
import '../assets/vendors/style';

import SignIn from './SignIn';
import SignUp from './SignUp';
import AppLocale from '../lngProvider';

function App() {
  const locale = {
    languageId: 'english',
    locale: 'zh',
    name: 'English',
    icon: 'us',
  };
  const currentAppLocale = AppLocale[locale.locale];
  return (
    <Router>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <div className="app-main">
          <Switch>
            <Route exact path={'/'}>
              <Redirect to="/signin" />
            </Route>
            <Route exact path={'/signin'} component={SignIn} />
            <Route exact path={'/signup'} component={SignUp} />
          </Switch>
        </div>
      </IntlProvider>
    </Router>
  );
}

export default App;
