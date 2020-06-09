import { readFile, writeFileSync } from 'fs';

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
      writeFileSync(global.fileName, JSON.stringify(initialJson));
    }
  },
};

export default server;
