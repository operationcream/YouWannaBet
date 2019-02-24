import React from 'react';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import UserBetList from './UserBetList.jsx';
// import banner from '../../images/Banner-Dark.jpg';
// welcomes user, list points and contains the users bets

const User = ({ userBets }) => (
  <div>
    <UserBetList userBets={userBets} />
  </div>
);

export default User;
