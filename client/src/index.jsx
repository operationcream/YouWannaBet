/* eslint import/extensions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/searchGames.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        <div id="Search" className="col-md-6 offset-md-3">
          <h1>Search</h1>
          <Search />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
