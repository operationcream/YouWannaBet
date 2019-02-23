import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <button
          // bsStyle="primary"
              type="button"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
          >
          Home
          </button>
            <button
          // bsStyle="primary"
              type="button"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'search')}
          >
          Search
          </button>
            {
          !isAuthenticated() && (
            <button
              id="qsLoginBtn"
              // bsStyle="primary"
              type="button"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
            </button>
          )
        }
            {
          isAuthenticated() && (
            <button
              id="qsLogoutBtn"
              // bsStyle="primary"
              type="button"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </button>
          )
        }
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
