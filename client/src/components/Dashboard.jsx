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
      userInfo: '',
    };
    // this.getItems = this.getItems.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    // send request to server to retrieve users live bets
    // where user is poster and acceptor
    axios.get('/api/userBets')
      .then((userBet) => {
        this.setState({
          userBets: userBet,
        });
        console.log('successfully got userBets');
      })
      .catch((err) => {
        console.log(err, 'unable to get userBets');
      });

    // send request to server to retrieve the username and userpoints
    axios.get('/api/userInfo')
      .then((user) => {
        this.setState({
          userInfo: user,
        });
      })
      .catch((err) => {
        console.log(err, 'unable to get userInfo');
      });

    // this.getItems()
    //   .then((data) => {
    //     this.setState({
    //       items: data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  }

  changeView(option) {
    // will toggle the view between the dash and the search
    this.setState({
      view: option,
    });
  }


  render() {
    const { view, userBets, userInfo } = this.state;
    return (
      <div>
        <h1>DashBoard</h1>
        <TopBar changeView={this.changeView} />
        { view === 'dashboard'
          ? <User 
            userBets={userBets} 
            userInfo={userInfo}
          />
          : <Search />
        }
      </div>
    );
  }
}

export default Dashboard;
