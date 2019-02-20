/* eslint import/extensions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Search from './components/searchGames.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
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
    return axios.get('/games')
      .then(({ data }) => data);
  }

  render() {
    return (
      <div>
        <div className="col-md-6 offset-md-3">
          <h1>Team List</h1>
          <List items={this.state.games} />
        </div>
        {/* Places the two search bars.  getGames HELPER FUNCTION not yet built */}
        <div className="col-md-6 offset-md-3">
          <Search
            handleSearchInputChange={this.getGames}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
