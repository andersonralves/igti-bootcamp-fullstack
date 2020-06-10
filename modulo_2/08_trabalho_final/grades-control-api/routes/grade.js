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

// Atualizar Grade
router.put('/', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const newGrade = req.body;

    let oldIndex = dtGrades.grades.findIndex(
      (grade) => grade.id === newGrade.id
    );

    if (oldIndex < 0) {
      throw new Error(`Id '${newGrade.id}' não cadastrado`);
    }

    dtGrades.grades[oldIndex] = newGrade;
    await writeFile(global.dataFileName, JSON.stringify(dtGrades));

    res.status(204).send();
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

export default router;

/*
 try {

  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }*/
