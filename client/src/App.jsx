/* eslint-disable react/jsx-filename-extension */
/* eslint import/extensions: 0 */
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import Search from './components/searchGames.jsx';
// import Login from './components/Login.jsx';
// import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

// import Auth from './Auth/Auth';

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
        {/* <div>
          <h1>Login</h1>
          djf;lkajdfklasjl
          <Login />
        </div>
        <div className="col-md-6 offset-md-3">
          <Dashboard />
        </div>
        {/* Places the two search bars.  getGames HELPER FUNCTION not yet built */}
        {/* <div className="col-md-6 offset-md-3">
          <h1>Search</h1>
          <Search />
        </div> */}
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
