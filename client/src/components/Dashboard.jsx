/* eslint import/extensions: 0 */
import React from 'react';
import axios from 'axios';

import User from './User.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBets: [],
      userInfo: '',
    };
  }

  componentDidMount() {
    // send request to server to retrieve users live bets
    // where user is poster and acceptor
    axios.get('/api/userBets')
      .then((userBet) => {
        this.setState({
          userBets: userBet,
        });
<<<<<<< HEAD
        console.log('successfully mounted');
=======
        console.log('successfully got userBets');
>>>>>>> bd02c71e6ab4ccfccc1481eea4a9b4b127b11680
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
  }

<<<<<<< HEAD
  render() {
    const { userBets } = this.state;
    return (
      <div>
        <h1>DashBoard</h1>
        <User userBets={userBets} />
=======
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
>>>>>>> bd02c71e6ab4ccfccc1481eea4a9b4b127b11680
      </div>
    );
  }
}

export default Dashboard;
