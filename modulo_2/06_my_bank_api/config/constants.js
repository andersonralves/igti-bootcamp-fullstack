import winston from 'winston';
<<<<<<< HEAD
import path from 'path';

// database
global.fileName = path.join(path.resolve(), 'data', 'data_accounts.json');
=======

// database
global.fileName = 'data_accounts.json';
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

// logger
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

<<<<<<< HEAD
let filename = path.join(path.resolve(), 'logs', 'my-bank-api.log');

=======
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
<<<<<<< HEAD
    new winston.transports.File({ filename: filename }),
=======
    new winston.transports.File({ filename: 'my-bank-api.log' }),
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
  ],
  format: combine(label({ label: 'my-bank-api' }), timestamp(), myFormat),
});

export default () => {};
