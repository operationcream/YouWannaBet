import React from 'react';
import UserBetListItem from './UserBetListItem.jsx';
// container to hold users live bets
const UserBetList = ({userBets}) => (
  <div className="userBetList">
    <h3>UserBetList stuff</h3>
    {userBets.map(userBet => <UserBetListItem /*TODOkey={userBet.id}*/ item={userBet} />)}

  </div>
);

export default UserBetList;