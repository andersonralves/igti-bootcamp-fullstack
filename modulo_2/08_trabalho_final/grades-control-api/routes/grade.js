import express from 'express';
import { promises as fsPromises } from 'fs';

const router = express.Router();
const { readFile, writeFile } = fsPromises;

async function getGrades() {
  const data = await readFile(global.dataFileName);
  return JSON.parse(data);
}

// Listar Grades
router.get('/', async (req, res) => {
  const { grades } = await getGrades();
  res.send({ grades });
});

// Criar Grade
router.post('/', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const grade = { id: dtGrades.nextId++, ...req.body, timestamp: new Date() };
    dtGrades.grades.push(grade);

    await writeFile(global.dataFileName, JSON.stringify(dtGrades));

    res.send(grade);
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

export default router;
