require('dotenv').config();

// check out https://node-postgres.com/
// for docs

const pg = require('pg');

const config = {
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
  max: 10,
};

const pool = new pg.Pool(config);

pool.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('database connected');
  }
});

module.exports.getAllUsers = (callback) => {
  pool.query('SELECT * FROM app_user', (error, response) => {
    console.log(response.rows);
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.rows);
    }
  });
};

module.exports.saveBet = (gameId, amount, posterId, callback) => {
  pool.query('INSERT INTO bet (id_game, amount, id_user_poster) VALUES($1, $2, $3) RETURNING *;',
    [gameId, amount, posterId], (error, insertResult) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, insertResult.rows);
      }
    });
    
  module.exports.updateBet = (acceptorId, betId, callback) => {
    pool.query('UPDATE bet SET id_user_acceptor = $1 WHERE id_bet = $2;',
      [acceptorId, betId], (error, insertResult) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, insertResult);
        }
      });

module.exports.saveAllTeams = (teamsArray) => {
  teamsArray.forEach((team) => {
    // eslint-disable-next-line no-param-reassign
    team.nba_id = parseInt(team.nba_id, 10);
    const params = [];
    params.push(team.team_name);
    params.push(team.nba_id);
    params.push(team.tri_code);
    const text = 'INSERT INTO team(team_name, nba_id, tri_code) VALUES($1, $2, $3) RETURNING *';
    pool.query(text, params, (err, res) => {
      if (err) {
        // console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    });
  });
};

// returns all games currently in DB
module.exports.getAllGames = (callback) => {
  pool.query('SELECT * FROM game', (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.rows);
    }
  });
};

// returns all bets currently in DB
module.exports.getAllBets = (callback) => {
  pool.query('SELECT * FROM bet', (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.rows);
    }
  });
};

module.exports.getBetsByTeam = (teamId, callback) => {
  pool.query('SELECT * FROM bet WHERE id_game IN (SELECT id_game FROM game WHERE id_team_home = $1 OR id_team_away = $1);', [teamId], (error, games) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, games.rows);
    }
  });
};

// helper function to query DB to retrieve user name and points
module.exports.getUserInfo = (userId, callback) => {
  pool.query('SELECT * FROM app_user WHERE id_user = ($1)', [userId], (err, res) => {
    if (err) {
      console.log(err, 'there is an error getting the userInfo');
      callback(err);
    } else {
      console.log('getuserInfo successful');
      callback(null, res);
    }
  });
};

// helper function to query DB to retrieve user bets from acceptor and poster field
module.exports.getUserBets = (userId, callback) => {
  pool.query('SELECT * FROM bet WHERE ($1) IN(id_user_acceptor, id_user_poster)', [userId], (err, res) => {
    if (err) {
      console.log('there is an error getting the userbets');
      callback(err);
    } else {
      console.log('successfully getting user bets');
      callback(null, res);
    }
  });
};
