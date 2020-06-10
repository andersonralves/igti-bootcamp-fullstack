import express from 'express';
import cors from 'cors';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';

const app = express();

import constants from './config/constants.js';
import server from './config/server.js';
import accountsRouter from './routes/accounts.js';
import { swaggerDocument } from './doc.js';

app.use(express.json());
//app.use(cors());

app.use('/account', accountsRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(server.port, server.start());
