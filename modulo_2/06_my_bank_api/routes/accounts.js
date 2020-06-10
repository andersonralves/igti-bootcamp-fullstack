import express from 'express';
<<<<<<< HEAD
import cors from 'cors';
import { promises } from 'fs';
const { readFile, writeFile } = promises;
=======
import { readFile, writeFile } from 'fs';
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

const router = express.Router();

// Index
<<<<<<< HEAD
router.get('/', cors(), async (_, res) => {
  try {
    let data = await readFile(global.fileName, 'utf8');
=======
router.get('/', async (_, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    let json = JSON.parse(data);

    json.accounts.sort((prev, curr) => {
      return prev.name.localeCompare(curr.name);
    });

    delete json.nextId;

    res.send(json);

    logger.info(`GET /account`);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(`GET /account - ${err.message}`);
  }
});

// Show
router.get('/:id', async (req, res) => {
  try {
<<<<<<< HEAD
    let data = await readFile(global.fileName, 'utf8');
=======
    let data = await fs.readFile(global.fileName, 'utf8');
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    let json = JSON.parse(data);
    const account = json.accounts.find(
      (account) => account.id === parseInt(req.params.id, 10)
    );

    if (!account) {
<<<<<<< HEAD
      throw new Error(`Account Not Found (id: ${req.params.id})`);
=======
      res.status(404).send({ message: 'Account Not Found' });
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    }

    res.send(account);
    logger.info(`GET /account/:id - ${JSON.stringify(account)}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(`GET /account/:id - ${err.message}`);
  }
});

// Store
router.post('/', async (req, res) => {
  try {
    let account = req.body;
<<<<<<< HEAD
    let data = await readFile(global.fileName, 'utf8');
=======
    let data = await fs.readFile(global.fileName, 'utf8');
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    let json = JSON.parse(data);

    account = { id: json.nextId++, ...account };
    json.accounts.push(account);

<<<<<<< HEAD
    await writeFile(global.fileName, JSON.stringify(json));
=======
    await fs.writeFile(global.fileName, JSON.stringify(json));
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

    res.status(201).end();

    logger.info(`POST /account - ${JSON.stringify(account)}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(`PSOT /account - ${err.message}`);
  }
});

// Update - PUT
router.put('/', async (req, res) => {
  let newAccount = req.body;

  try {
<<<<<<< HEAD
    let data = await readFile(global.fileName, 'utf8');
=======
    let data = await fs.readFile(global.fileName, 'utf8');
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

    let json = JSON.parse(data);
    let oldIndex = json.accounts.findIndex(
      (account) => account.id === parseInt(newAccount.id, 10)
    );
    json.accounts[oldIndex].name = newAccount.name;
    json.accounts[oldIndex].balance = newAccount.balance;

<<<<<<< HEAD
    await writeFile(global.fileName, JSON.stringify(json));
=======
    await fs.writeFile(global.fileName, JSON.stringify(json));
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    res.status(204).end();

    logger.info(`PUT /account - ${JSON.stringify(newAccount)}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(`PUT /account - ${err.message}`);
  }
});

// Update - POST
router.post('/transaction', async (req, res) => {
  let params = req.body;
  try {
<<<<<<< HEAD
    let data = await readFile(global.fileName, 'utf8');
=======
    let data = await fs.readFile(global.fileName, 'utf8');
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    let json = JSON.parse(data);
    let index = json.accounts.findIndex(
      (account) => account.id === parseInt(params.id, 10)
    );

    if (index < 0) {
<<<<<<< HEAD
      logger.error(`POST /transaction - Id não cadastrado -> ${params.id}`);
      throw new Error('Conta não existe');
    }

    if (typeof params.value !== 'number') {
      logger.error(`POST /transaction - Valor inválido -> ${params.value}`);
      throw new Error('Valor inválido');
=======
      throw new Error('Conta não existe');
      logger.error(`POST /transaction - Id não cadastrado -> ${params.id}`);
    }

    if (typeof params.value !== 'number') {
      throw new Error('Valor inválido');
      logger.error(`POST /transaction - Valor inválido -> ${params.value}`);
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    }

    let balance = json.accounts[index].balance;
    if (params.value < 0 && balance + params.value < 0) {
<<<<<<< HEAD
      logger.error(
        `POST /transanction - Saldo insuficiente -> Saldo: ${balance}, Valor solicitado: ${params.value}`
      );
      throw new Error('Saldo insuficiente');
=======
      throw new Error('Saldo insuficiente');
      logger.error(
        `POST /transanction - Saldo insuficiente -> Saldo: ${balance}, Valor solicitado: ${params.value}`
      );
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    }

    json.accounts[index].balance += params.value;

    let account = json.accounts[index];

<<<<<<< HEAD
    await writeFile(global.fileName, JSON.stringify(json));
=======
    await fs.writeFile(global.fileName, JSON.stringify(json));
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

    res.status(200).send(account);

    logger.info(`POST /transanction - ${JSON.stringify(account)}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
<<<<<<< HEAD
    logger.error(`POST /transanction - ${err.message}`);
=======
    logger.error(`POST /account - ${err.message}`);
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
<<<<<<< HEAD
    let data = await readFile(global.fileName, 'utf8');
=======
    let data = await fs.readFile(global.fileName, 'utf8');
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

    let json = JSON.parse(data);
    let accounts = json.accounts.filter(
      (account) => account.id !== parseInt(req.params.id, 10)
    );
    json.accounts = accounts;

<<<<<<< HEAD
    await writeFile(global.fileName, JSON.stringify(json));
=======
    await fs.writeFile(global.fileName, JSON.stringify(json));
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

    res.status(204).end();
    logger.info(`DELETE /account - Id: ${req.params.id}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(`DELETE /account - ${err.message}`);
  }
});

export default router;
