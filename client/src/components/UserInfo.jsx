import React from 'react';
import UserBetList from './UserBetList.jsx';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// welcomes user, list points and contains the users bets
// import banner from '../../images/Banner-Dark.jpg';

const UserInfo = ({ userInfo }) => (
  <div>
    <h1>UserInfo</h1>
    Welcome { userInfo.username }! <br />
    Current points: { userInfo.points }
    {/* <h3>{props.UserInfo}</h3> */}
    {/* <h3>{points}</h3> */}

  </div>
);

export default UserInfo;
