/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Search from '../components/searchGames.jsx';
import Dashboard from '../components/Dashboard.jsx';

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div>
              <h4>
                You are logged in!
              </h4>
              <div className="col-md-6 offset-md-3">
                <Dashboard />
              </div>
              <div className="col-md-6 offset-md-3">
                <h1>Search</h1>
                <Search />
              </div>
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.login.bind(this)}
              >
                Log In
              </a>
              {' '}to continue.
            </h4>
          )
        }
      </div>
    );
  }
}

export default Home;
