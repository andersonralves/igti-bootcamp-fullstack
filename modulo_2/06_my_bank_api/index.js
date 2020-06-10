import express from 'express';
<<<<<<< HEAD
import cors from 'cors';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';
=======
import winston from 'winston';
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

const app = express();

import constants from './config/constants.js';
import server from './config/server.js';
import accountsRouter from './routes/accounts.js';
<<<<<<< HEAD
import { swaggerDocument } from './doc.js';
=======
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

app.use(express.json());
//app.use(cors());

app.use('/account', accountsRouter);
<<<<<<< HEAD
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
=======

>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
app.listen(server.port, server.start());
