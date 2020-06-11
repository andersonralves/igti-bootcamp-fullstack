import express from 'express';
import { promises as fsPromises } from 'fs';

const router = express.Router();
const { readFile, writeFile } = fsPromises;

// Buscar as Grades
async function getGrades() {
  const data = await readFile(global.dataFileName);
  return JSON.parse(data);
}

// Atualizar as Grades
async function updateGrades(grades) {
  await writeFile(global.dataFileName, JSON.stringify(grades));
}

// Listar Grades
router.get('/', async (req, res) => {
  try {
    const { grades } = await getGrades();
    res.send({ grades });
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

// Listar Nota da Disciplina
router.get('/note/:student/:subject', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const { student, subject } = req.params;
    const value = dtGrades.grades.reduce((acc, curr) => {
      if (
        curr.student.toLowerCase() === student.toLowerCase() &&
        curr.subject.toLowerCase() == subject.toLowerCase()
      ) {
        return acc + curr.value;
      }
      return acc;
    }, 0);

    res.status(200).send({ student, subject, value });
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

// Listar Média das Grades da Disciplina
router.get('/average/:subject/:type', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const { subject, type } = req.params;
    let count = 0;
    const total = dtGrades.grades.reduce((acc, curr) => {
      if (
        curr.type.toLowerCase() === type.toLowerCase() &&
        curr.subject.toLowerCase() == subject.toLowerCase()
      ) {
        count++;
        return acc + curr.value;
      }
      return acc;
    }, 0);
    const average = total / count;

    res.status(200).send({ subject, type, average });
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

// Listar Grade Específica
router.get('/:id', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const grade = dtGrades.grades.find((grade) => {
      return grade.id === parseInt(req.params.id, 10);
    });

    if (!grade) {
      throw new Error(`Id '${req.params.id}' não cadastrado`);
    }

    res.status(200).send({ grade });
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

// Criar Grade
router.post('/', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const grade = { id: dtGrades.nextId++, ...req.body, timestamp: new Date() };
    dtGrades.grades.push(grade);

    await updateGrades(dtGrades);

    res.status(201).send(grade);
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

    await updateGrades(dtGrades);

    res.status(204).send();
  } catch (err) {
    const msgError = { error: err.message };
    res.status(400).send(msgError);
    console.log(msgError);
  }
});

// Excluir Grade
router.delete('/', async (req, res) => {
  try {
    const dtGrades = await getGrades();
    const newGrades = dtGrades.grades.filter(
      (grade) => grade.id !== req.body.id
    );

    dtGrades.grades = newGrades;

    await updateGrades(dtGrades);

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
