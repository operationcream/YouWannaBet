import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Toolbar } from 'material-ui';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';

const TopBar = ({ changeView }) => (
  <div>
    <MuiThemeProvider>
      <AppBar>
        <button className="button" onClick={() => { changeView('search'); }}>Search</button>
        <button className="button" onClick={() => { changeView('dashboard'); }}>Dashboard</button> 
      </AppBar>
    </MuiThemeProvider>
  </div>
);

export default TopBar;
