import winston from 'winston';
import path from 'path';

// database
global.fileName = path.join(path.resolve(), 'data', 'data_accounts.json');

// logger
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

let filename = path.join(path.resolve(), 'logs', 'my-bank-api.log');

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: filename }),
  ],
  format: combine(label({ label: 'my-bank-api' }), timestamp(), myFormat),
});

export default () => {};
