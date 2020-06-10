import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => (
  response.send('Olá mundo!')
));

export default routes;