/* eslint import/extensions: 0 */
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './searchGames.jsx';
import TopBar from './TopBar.jsx';
import User from './User.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'dashboard',
      userBets: [],
    };
    // this.getItems = this.getItems.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    axios.get('/api/userBets')
      .then((userBet) => {
        this.setState({
          userBets: userBet,
        });
        console.log('successfully mounted')
      })
      .catch((err) => {
        console.log(err, 'not mounting');
      });
  }

  changeView(option) {
    // will toggle the view between the dash and the search
    this.setState({
      view: option,
    });
  }

  // getItems() {
  //   return axios.get('/items')
  //     .then(({ data }) => data);
  // }

  render() {
    const { view, userBets } = this.state;
    return (
      <div>
        <h1>DashBoard</h1>
        <TopBar changeView={this.changeView} />
        { view === 'dashboard'
          ? <User userBets={userBets} />
          : <Search />
        }
      </div>
    );
  }
}

export default Dashboard;
