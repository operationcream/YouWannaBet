import React from 'react';
// container to hold users live bets
const SearchGamesList = (props) => {
console.log(props);
  let games = props.games;
  let today = new Date().toISOString().slice(0, 10).split('-');
  today = today.join('');
  // console.log(today);
  let gamesAfterToday = [];
  let count = 0;
  games.forEach((game) => {
    if (game.homeStartDate > today && count < 10) {
      gamesAfterToday.push(game);
      count += 1;
    }
  });
console.log(gamesAfterToday);

  return (
    <div className="teamBetList">
      <h3>List of Bets</h3>
    </div>
  );
};

export default SearchGamesList;
