// https://docs.feathersjs.com/api/express.html
// check out docs for more info
require('dotenv').config();
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

const app = express(feathers());
const port = process.env.PORT || 3000;

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
