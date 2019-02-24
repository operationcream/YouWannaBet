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
  }

  changeView(option) {
    // will toggle the view between the dash and the search
    this.setState({
      view: option,
    });
  }


  render() {
    const { userBets } = this.state;
    return (
      <User userBets={userBets} />
    );
  }
}

export default Dashboard;
