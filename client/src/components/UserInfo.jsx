import React from 'react';
import UserBetList from './UserBetList.jsx';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// welcomes user, list points and contains the users bets
// import banner from '../../images/Banner-Dark.jpg';

const UserInfo = ({username, points}) => (
  <div>
    <h1>UserInfo</h1>
    <h3>{username}</h3>
    <h3>{points}</h3>

  </div>
);

export default UserInfo;
