/* eslint import/extensions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/searchGames.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: ['Pelicans', 'Hawks'],
    };
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames()
      .then((data) => {
        this.setState({
          games: data,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  getGames() {
    return axios.get('/api/games')
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
          <h1>Search</h1>
          <Search
            handleSearchInputChange={this.getGames}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
