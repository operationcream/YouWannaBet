import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Toolbar } from 'material-ui';

class App extends Component {
  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <MuiThemeProvider>
          <AppBar>
            <IconButton
              type="button"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
          Home
            </IconButton>
            <IconButton
              type="button"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'search')}
            >
          Search
            </IconButton>
            {
          !isAuthenticated() && (
            <IconButton
              id="qsLoginBtn"
              type="button"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
            </IconButton>
          )
        }
            {
          isAuthenticated() && (
            <IconButton
              id="qsLogoutBtn"
              type="button"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </IconButton>
          )
        }
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
