const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/', (req, res) => {
  if (!req.query.period) {
    res.send({
      eror:
        'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm',
    });
  }

  res.end();
});

module.exports = transactionRouter;
