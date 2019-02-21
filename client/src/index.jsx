/* eslint import/extensions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import UserForm from './components/signup-login/UserForm.jsx';
import Search from './components/searchGames.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loggedIn: false,
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems()
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  getItems() {
    return axios.get('/items')
      .then(({ data }) => data);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Login</h1>
          <Login />
        </div>
        <div className="col-md-6 offset-md-3">
          <Dashboard />
        </div>
        {/* Places the two search bars.  getGames HELPER FUNCTION not yet built */}
        <div className="col-md-6 offset-md-3">
<<<<<<< HEAD
          {/* <Search
            handleSearchInputChange = {this.getGames.bind(this)}
          /> */}
        </div>
        <div className="col-md-6 offset-md-3">
          <UserForm />
=======
          <h1>Search</h1>
          <Search
            // handleSearchInputChange={this.getGames.bind(this)}
          />
>>>>>>> fc6b640b995da749e943d1ea3aa24388120c3f1c
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
