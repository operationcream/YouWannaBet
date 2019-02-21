import React from 'react';
import ListItem from './ListItem.jsx';

const List = props => (
  <div>
    <h4> Upcoming games </h4>
    There are { props.games.length } games.
    { props.games.map(game => <ListItem game={game} />)}
  </div>
);

export default List;
