import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import IntlMessages from '../util/IntlMessages';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <div className="app-login-header">
            <h1>
              <IntlMessages id="appModule.signup" />
            </h1>
          </div>
          <div className="mb-4">
            <h2>
              <IntlMessages id="appModule.createAccount" />
            </h2>
          </div>
          <div className="app-login-form">
            <form>
              <fieldset>
                <TextField
                  type="text"
                  label={<IntlMessages id="appModule.name" />}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                  defaultValue={name}
                  margin="normal"
                  className="mt-0 mb-2"
                />
                <TextField
                  type="text"
                  label={<IntlMessages id="appModule.email" />}
                  fullWidth
                  onChange={(event) => setEmail(event.target.value)}
                  defaultValue={email}
                  margin="normal"
                  className="mt-0 mb-2"
                />
                <TextField
                  type="password"
                  label={<IntlMessages id="appModule.password" />}
                  fullWidth
                  onChange={(event) => setPassword(event.target.value)}
                  defaultValue={password}
                  margin="normal"
                  className="mt-0 mb-4"
                />
                <div className="mb-3 d-flex justify-content-between align-items-center mb-3">
                  <Button variant="contained" color="primary">
                    <IntlMessages id="appModule.signup" />
                  </Button>
                  <Link to="/signin">
                    <IntlMessages id="signUp.alreadyMember" />
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
