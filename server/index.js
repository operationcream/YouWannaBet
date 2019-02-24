require('dotenv').config();
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express(feathers());
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../client/dist`));

// Set Express to use body-parser as a middleware //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/callback', express.static(`${__dirname}/../client/dist`));

// Handles POST requests from Search Games //
app.post('/api/games', (req, res) => {
  const teamName = req.body;
  console.log(req.body);
  res.send(teamName);
});

// Sends Get Request to API for Teams
app.get('/api/allTeams', (req, res) => {
  axios.get('http://data.nba.net/prod/v2/2018/teams.json')
    .then(({ data }) => {
      // console.log(data.league.vegas);
      // Have Teams Now Send to Database
      const league = data.league.vegas;
      const sendToDatabase = [];
      // Structure each team's object //
      league.forEach((team) => {
        const teamInfo = {};
        teamInfo.team_name = team.fullName;
        teamInfo.nba_id = team.teamId;
        teamInfo.tri_code = team.tricode;
        sendToDatabase.push(teamInfo);
      });
      // Send the Array of objects containing all teams to the function to save to database //
      db.saveAllTeams(sendToDatabase);
    }).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
    });
});

// server request that will query DB to retrieve userInfo
app.get('/api/userInfo', (req, res) => {
  console.log(req);
  const { id } = req.query;
  db.getUserInfo(id, (err, user) => {
    if (err) {
      res.send('could not retrieve user');
    } else {
      console.log('sending user');
      res.send(user);
    }
  });
});
app.get('/api/allTeams', (req, res) => {
  axios.get('http://data.nba.net/prod/v2/2018/teams.json')
    .then(({ data }) => {
      // console.log(data.league.vegas);
      // Have Teams Now Send to Database
      const league = data.league.vegas;
      const sendToDatabase = [];
      // Structure each team's object //
      league.forEach((team) => {
        const teamInfo = {};
        teamInfo.team_name = team.fullName;
        teamInfo.nba_id = team.teamId;
        teamInfo.tri_code = team.tricode;
        sendToDatabase.push(teamInfo);
      });
      // Send the Array of objects containing all teams to the function to save to database //
      db.saveAllTeams(sendToDatabase);
    }).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
    });
});

app.get('/games', (req, res) => {
  // getting all games from the DB
  // each game has a unique identifier
  // allows user to see and apply bets to a specific game
  db.getAllGames((err, games) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.status(200).send(games);
    }
  });

  // on client side
  // show list of games
  // each game listing has related bets listed
  // each game can have new bets posted
  // each bet listed can be accepted
});

// getting twenty most recent bets from the DB
app.get('/api/bets', (req, res) => {
  // each bet has a unique identifier
  // allows user to see and accept bets to a specific game
  db.getAllBets((err, bets) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      // returns array with bet details sorted by most recent:
      // id_bet, id_game, amount, id_user_acceptor, id_user_poster, date_created
      bets.sort((a, b) => new Date(b.date_created).valueOf() - new Date(a.date_created).valueOf());
      res.status(200).send(bets.splice(0, 20));
    }
  });

  // on client side
  // show list of bets
  // each game listing has related bets listed
  // each game can have new bets posted
  // each bet listed can be accepted
});

// an array of bet objects where the id_team provided is either the id_team_home or id_team_away
// get all bets posted for a single team
app.get('/api/bets/:teamId', (req, res) => {
  // use bet by team method to get bets by single team
  const { teamId } = req.params;
  db.getBetsByTeam(teamId, (err, bets) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      // returns an array of bets by single team
      res.status(200).send(bets);
    }
  });
});

// adds single bet to database (used when user initially posts bet)
app.put('/api/bets/', (req, res) => {
  // save single bet to database
  db.saveBet(posterId, amount, gameId);
  // takes in user id (poster), amount, id_game
  // returns insert id to client (or whatever result is)
});

// updates single bet in DB (used when user accepts bet)
app.patch('/api/bets/', (req, res) => {
  // takes in user id (acceptor) and bet id
  // updates record in database
  // returns insert id to client (or whatever result is)
});

// server request to handle
// app.get('/api/userInfo', (req, res) => {

// });

// server request that will query DB to retrieve usersBets
app.get('/api/userBets', (req, res) => {
  res.send('ahhh');
});

app.get('/api/users', (req, res) => {
  // use db.getallUsers function to get all users
  db.getAllUsers((error, users) => {
    // if error
    if (error) {
      // console.log error
      console.error(error);
      // send 500 status code
      res.sendStatus(500);
    } else {
      // if no error
      // send back query results in res.send
      res.send(users);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
