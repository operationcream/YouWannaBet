import React from 'react';
import UserBetList from './UserBetList.jsx';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// welcomes user, list points and contains the users bets
// import banner from '../../images/Banner-Dark.jpg';

const User = props => (
  <div>
    {/* <header className="userHeader">
      <img src={banner} className="app-logo" alt="logo" />
    </header> */}
    
    <h1>USER STUFF</h1>
    <UserBetList />
    
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
