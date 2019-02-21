/* eslint import/extensions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Search from './components/searchGames.jsx';
import Login from './components/Login.jsx';
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
          <h1>Item List</h1>
          <List items={this.state.items} />
        </div>
        {/* Places the two search bars.  getGames HELPER FUNCTION not yet built */}
        <div className="col-md-6 offset-md-3">
          <Search
            // handleSearchInputChange={this.getGames.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
