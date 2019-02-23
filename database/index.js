require('dotenv').config();

// check out https://node-postgres.com/
// for docs

// await method ///////
// uncomment BELOW to use
// const { Client } = require('pg')
// const client = new Client()

// await client.connect()

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()


// callback method /////////
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

const getAllUsers = (callback) => {
  pool.query('SELECT * FROM app_user', (error, response) => {
    console.log(response.rows);
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.rows);
    }
  });
};

// const updateBet = (idUser, idBet, callback) => {
//   const query = [idUser, idBet];
  
//   pool.query('UPDATE bet SET idUser = ? WHERE idBet = ?', query, (error, updatedBet) => {
//     if (error) {
//       console.log(error, 'update bet error');
//       callback(error);
//     } else {
//       console.log('bet updated');
//       callback(null, updatedBet);
//     }
//   }

const saveAllTeams = (teamsArray) => {
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
        //console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    });
  });
};

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message);
//   // Hello World!
//   client.end();
// });

module.exports = {
  getAllUsers,
  // updateBet,
  saveAllTeams,
};
