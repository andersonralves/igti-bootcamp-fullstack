import express from 'express';
import winston from 'winston';

const app = express();

import constants from './config/constants.js';
import server from './config/server.js';
import accountsRouter from './routes/accounts.js';

app.use(express.json());

app.use('/account', accountsRouter);

app.listen(server.port, server.start());
