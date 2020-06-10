import express from 'express';
import cors from 'cors';

import server from './config/server.js';
import gradeRouter from './routes/grade.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/grade', gradeRouter);

app.get('/', (req, res) => {
  res.send('oi');
});

app.listen(server.port, server.start());
