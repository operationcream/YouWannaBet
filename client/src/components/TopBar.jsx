import React from 'react';

const TopBar = ({ changeView }) => (
  <div>
    <button onClick={ ()=> { changeView('search') } }>Search</button>
    <button onClick={ ()=> { changeView('dashboard') } }>Dashboard</button>

  </div>
);

export default TopBar;
