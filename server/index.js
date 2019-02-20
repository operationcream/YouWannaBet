// https://docs.feathersjs.com/api/express.html
// check out docs for more info

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const db = require('../database');

const app = express(feathers());
const port = process.env.PORT || 3000;

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('hello world!');
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

app.listen(port, () => console.log(`listening on port ${port}!`));
