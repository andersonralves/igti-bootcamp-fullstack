import { promises, write, writeFileSync } from "fs";
import path from 'path';
const __dirname = path.resolve();

let functions  = {};

const criarArquivoParaCadaEstado =  (estados, cidades) =>  {

  let promises = [];

  estados.forEach(estado => {
    let cidadesArray = cidades.filter(cidade => cidade.Estado == estado.ID).map(cidade => {

      const { ID, Nome } = cidade;

      return {
        ID,
        Nome
      }
    });

    let filenameUF = `./src/data/${estado.Sigla}.json`;

    writeFileSync(filenameUF, JSON.stringify(cidadesArray));

  });
    
};

functions = { criarArquivoParaCadaEstado, ...functions} ;

export default functions;

