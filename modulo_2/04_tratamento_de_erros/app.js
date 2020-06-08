import express from 'express';

const app = express();
const router = express.Router();
const port = 3000;

app.get('/erro', async (_req, _res, next) => {
  try {
    throw new Error('Error message');
  } catch (err) {
    next(err);
  }
});

app.use((err, _req, res, _) => {
  console.log(err);
  res.status(500).send('An error occurred!');
});


app.listen(port, console.log(`Running on port ${port}`));