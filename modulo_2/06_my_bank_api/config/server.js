<<<<<<< HEAD
import { promises } from 'fs';
import path from 'path';
const { readFile, writeFile } = promises;
=======
import { readFile, writeFileSync } from 'fs';
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348

const server = {
  port: 3000,
  start: async () => {
    try {
      await readFile(global.fileName, 'utf8');
      logger.info('API Started!');
    } catch (err) {
      const initialJson = {
        nextId: 1,
        accounts: [],
      };
<<<<<<< HEAD

      writeFile(global.fileName, JSON.stringify(initialJson)).catch((err) => {
        console.log(err);
      });
=======
      writeFileSync(global.fileName, JSON.stringify(initialJson));
>>>>>>> 76bbbbd84b202b83f8874be8f46d8d87d4c29348
    }
  },
};

export default server;
