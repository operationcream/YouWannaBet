import React from 'react';
import axios from 'axios';

class GameBetItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: {},
    };
    const { betInfo } = props;
    console.log(betInfo);
    const betObj = {};
    this.getUserById(betInfo.id_user_acceptor)
      .then((user) => {
        betObj.acceptor = user.username;
        this.getUserById(betInfo.id_user_poster)
          .then((user2) => {
            betObj.poster = user2.username;
            betObj.amount = betInfo.amount;
            this.setState({ bet: betObj });
          });
      });
  }

  componentWillMount() {
  }

  getUserById(userId) {
    return axios.get(`/api/userInfo/${userId}`)
      .then(user => user.data.rows[0])
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.bet.poster} bet against {this.state.bet.acceptor} for {this.state.bet.amount}.
      </div>
    );
  }
}

export default GameBetItem;

// additional component to accept and post bets
// render single game info
// home team and away team
// bets that are posted, but not yet accepted
// option to post your own bet
