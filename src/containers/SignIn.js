import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import IntlMessages from '../util/IntlMessages';

export default function SignIn() {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo#123');
  return (
    <div className="app-login-container d-flex justify-content-center align-items-center">
      <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link to="/" title="Jumbo">
            <img
              src={require('../assets/images/logo.png').default}
              alt="Jumbo"
              title="Jumbo"
            />
          </Link>
        </div>
        <div className="app-login-content">
          <div className="app-login-header mb-4">
            <h1>
              <IntlMessages id="appModule.email" />
            </h1>
          </div>
          <div className="app-login-form">
            <form>
              <fieldset>
                <TextField
                  label={<IntlMessages id="appModule.email" />}
                  fullWidth
                  onChange={(event) => setEmail(event.target.value)}
                  defaultValue={email}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <TextField
                  type="password"
                  label={<IntlMessages id="appModule.password" />}
                  fullWidth
                  onChange={(event) => setPassword(event.target.value)}
                  defaultValue={password}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <div className="mb-3 d-flex justify-content-between align-items-center mb-3">
                  <Button variant="contained" color="primary">
                    <IntlMessages id="appModule.signIn" />
                  </Button>
                  <Link to="/signup">
                    <IntlMessages id="signIn.signUp" />
                  </Link>
                </div>
                <div className="my-1 my-sm-3 app-social-block">
                  <IntlMessages id="signIn.connectWith" />
                  <ul className="social-link">
                    <li>
                      <IconButton className="icon">
                        <i className="zmdi zmdi-facebook" />
                      </IconButton>
                    </li>
                    <li>
                      <IconButton className="icon">
                        <i className="zmdi zmdi-twitter" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton className="icon">
                        <i className="zmdi zmdi-google-plus" />
                      </IconButton>
                    </li>

                    <li>
                      <IconButton className="icon">
                        <i className="zmdi zmdi-github" />
                      </IconButton>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
