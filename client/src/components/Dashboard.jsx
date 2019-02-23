/* eslint import/extensions: 0 */
import React from 'react';
import axios from 'axios';

import User from './User.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBets: [],
    };
  }

  componentDidMount() {
    axios.get('/api/userBets')
      .then((userBet) => {
        this.setState({
          userBets: userBet,
        });
        console.log('successfully mounted');
      })
      .catch((err) => {
        console.log(err, 'not mounting');
      });
  }

  render() {
    const { userBets } = this.state;
    return (
      <div>
        <h1>DashBoard</h1>
        <User userBets={userBets} />
      </div>
    );
  }
}

export default Dashboard;
