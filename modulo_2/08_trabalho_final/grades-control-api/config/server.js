const port = 3000;

global.dataFileName = './data/grades.json';

export default {
  port,
  start: () => {
    console.log(`API started! Running on port ${port}`);
  },
};
