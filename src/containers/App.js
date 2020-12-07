import React from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import '../styles/bootstrap.scss';
import '../styles/app.scss';
import '../assets/vendors/style';

import asyncComponent from 'util/asyncComponent';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Routes from '../app/routes';

import AppLocale from '../lngProvider';

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App(props) {
  const { match } = props;
  console.log('App:', match);
  const locale = {
    languageId: 'english',
    locale: 'en',
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
            <RestrictedRoute
              path={`${match.url}app`}
              //authUser={authUser}
              component={Routes}
            />
            <Route exact path={'/signin'} component={SignIn} />
            <Route exact path={'/signup'} component={SignUp} />
            <Routes />
            <Route
              component={asyncComponent(() =>
                import('app/routes/extraPages/routes/404'),
              )}
            />
          </Switch>
        </div>
      </IntlProvider>
    </Router>
  );
}

export default App;
