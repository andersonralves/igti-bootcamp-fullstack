import express from 'express';
import { promises as fsPromises } from 'fs';

const router = express.Router();
const { readFile, writeFile } = fsPromises;

// Listar Grades
router.get('/', async (req, res) => {
  let data = JSON.parse(await readFile(global.dataFileName));
  const { grades } = data;

  res.send({ grades });
});

export default router;
