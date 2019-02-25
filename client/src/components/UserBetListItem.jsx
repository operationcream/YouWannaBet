import React from 'react';
// render each individual bet from UserBetList
class UserBetListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: {},
      accepted: false,
    };
  }

  render() {
    const { userBet} = this.props
    return (
      <div className="userBetListItem">
        <h3>Render individual bets here</h3>
      </div>
    );
  }
}


export default UserBetListItem;
