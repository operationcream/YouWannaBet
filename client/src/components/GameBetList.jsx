import React from 'react';
import axios from 'axios';
import GameBetItem from './GameBetItem.jsx';

class GameBetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
    };
  }

  componentWillMount() {
    this.setupBets();
  }

  getBetsForSingleTeam(teamId) {
    return axios.get(`/api/bets/${teamId}`)
      .then(bets => bets.data)
      .catch(error => console.log(error));
  }

  setupBets() {
    this.getBetsForSingleTeam(277).then((bets) => {
      this.setState({ bets });
    });
    // loop through bets
  }

  formatDate(yyyymmdd) {
    const year = yyyymmdd.substring(0, 4);
    const month = yyyymmdd.substring(4, 6);
    const day = yyyymmdd.substring(6, 8);
    return `${year}-${month}-${day}`;
  }


  render() {
    const { gameInfo } = this.props;
    return (
      <div>
        <h3>{gameInfo.homeTeam} vs. {gameInfo.awayTeam}</h3>
        {this.state.bets.map((bet, key) => <GameBetItem betInfo={bet} key={key} />)}
      </div>
    );
  }
}

export default GameBetList;

// additional component to accept and post bets
// render single game info
// home team and away team
// bets that are posted, but not yet accepted
// option to post your own bet

// brian has
// nba id
// team names and nba ID
// tricode
// game date

// ideal info to get
// query DB ID of particular game
