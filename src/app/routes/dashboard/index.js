import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

import CRMComponent from './routes/CRM';

const Dashboard = ({ match }) => {
  console.log('match:', match, match.url, `${match.url}/crm`);
  return (
    <div className="app-wrapper">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/crm`} />
        {/* <Redirect exact from={`${match.url}`} to={`${match.url}/crm`} /> */}
        <Route path={`${match.url}/crm`} component={CRMComponent} />
        {/* <Route
          component={asyncComponent(() =>
            import('app/routes/extraPages/routes/404'),
          )}
        /> */}
      </Switch>
    </div>
  );
};

export default Dashboard;
