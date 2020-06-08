import express from 'express';

const app = express();
const port = 3000;

// Next
app.get(
  '/testMultipleHandlers',
  (_, res, next) => {
    console.log('First method');
    next();
  },
  (_, res) => {
    console.log('Second method');
    res.end();
  }
);

const callback1 = (req, res, next) => {
  console.log('Callback 1');
  next();
};

const callback2 = (req, res, next) => {
  console.log('Callback 2');
  res.end();
};

app.get('/testMultipleHandlersArray', [callback1, callback2]);

// Route
app
  .route('/testeRoute')
  .get((req, res) => {
    res.end();
  })
  .post((req, res) => {
    res.end();
  })
  .delete((req, res) => {
    res.end();
  });

app.listen(port, console.log(`Running on port ${port}`));
