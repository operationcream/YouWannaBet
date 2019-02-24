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
  let teamName = req.body;
  console.log(req.body);
  res.send(req.body);
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

  // show list of games
  // each game listing has related bets listed
  // each game can have new bets posted
  // each bet listed can be accepted
});

// server request to handle
// app.get('/api/userInfo', (req, res) => {

// });


app.get('/api/users', (req, res) => {
  // TODO - your code here!
  // use db.getallphrases function to get all phrases
  db.getAllUsers((error, response) => {
    // if error
    if (error) {
      // console.log error
      console.error(error);
      // send 500 status code
      res.sendStatus(500);
    } else {
      // if no error
      // send back query results in res.send
      res.send(response);
    }
  });
});

// goes into the DB by
app.put('/api/bets', (req, res) => {

});

app.listen(port, () => console.log(`listening on port ${port}!`));
