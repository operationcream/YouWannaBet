import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     loggedIn: false,
  //   };
  // }

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
        <button
          // bsStyle="primary"
          type="button"
          className="btn-margin"
          onClick={this.goTo.bind(this, 'home')}
        >
          Home
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
      </div>
    );
  }
}

export default App;
