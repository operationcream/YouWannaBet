import React from 'react';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import UserBetList from './UserBetList.jsx';
// import banner from '../../images/Banner-Dark.jpg';
import UserInfo from './UserInfo.jsx';
// welcomes user, list points and contains the users bets

const User = ({ userInfo, userBets }) => (
  <div>
    {/* <header className="userHeader">
      <img src={banner} className="app-logo" alt="logo" />
    </header> */}

    <h1>USER STUFF</h1>
    <UserInfo userInfo={userInfo} />
    <UserBetList userBets={userBets} />

    {/* <div className="userMain">
      <span className="logo">User</span>
    </div>
    <div>
      <UserBetList />
    </div> */}
  </div>
  // <div>
  //   <div className="Nav">
  //   <span className="userMain">
  //   </span>
  //   </div>
  //   <h3>User stuff</h3>
  //   <UserBetList />

  // </div>
);

export default User;
