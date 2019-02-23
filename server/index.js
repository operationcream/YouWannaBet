// https://docs.feathersjs.com/api/express.html
// check out docs for more info
require('dotenv').config();
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const axios = require('axios');
const db = require('../database');

const app = express(feathers());
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../client/dist`));

app.use('/callback', express.static(`${__dirname}/../client/dist`));

app.get('/api/games', (req, res) => {
  res.send('hello world!');
});

// Sends Get Request to API for Teams
app.get('/api/allGames', (req, res) => {
  console.log('This Was Called');
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

// Games Endpoint
app.post('/api/games', (req, res) => {
  // use db.getALlGames
  res.json('Search Hit Endpoint');
});


// Register a service
app.use('/todos', {
  get(id) {
    return Promise.resolve({ id });
  },
});

// Register an Express middleware
app.use('/test', (req, res) => {
  res.json({
    message: 'Hello world from Express middleware',
  });
});

// Register multiple Express middleware functions
app.use('/test', (req, res, next) => {
  res.data = 'Step 1 worked';
  next();
}, (req, res) => {
  res.json({
    message: `Hello world from Express middleware ${res.data}`,
  });
});

// Testing the get function //
app.get('/', (req, res) => {
  res.end('Hello from Feathers');
});

app.listen(port, () => console.log(`listening on port ${port}!`));
