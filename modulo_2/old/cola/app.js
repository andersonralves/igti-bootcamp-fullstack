import { promises } from 'fs';
import { start } from 'repl';
const { readFile, writeFile } = promises;
import path from 'path';


console.log(path);

let states = [];

generateJsonStates();
citiesPerState();

async function generateJsonStates() {
  const jsonStates = await readFile('./jsonSource/Estados.json');
  const statesList = JSON.parse(jsonStates);
  const jsonCities = await readFile('./jsonSource/Cidades.json');
  const citiesList = JSON.parse(jsonCities);

  states = statesList
    .map((state) => {
      const city = citiesList
        .map((city) => {
          const { ID, Nome, Estado } = city;
          return {
            id: ID,
            name: Nome,
            idState: Estado,
          };
        })
        .filter((city) => {
          return city.idState === state.ID;
        });
      const { ID, Nome, Sigla } = state;
      return {
        id: ID,
        name: Nome,
        uf: Sigla,
        cities: JSON.stringify(city),
      };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  states.forEach((element) => {
    writeFile(`./jsonUFs/${element.uf}.json`, JSON.stringify(element));
  });
}

async function citiesPerState() {}




/*

-----------------------------------


import { promises } from 'fs';
const { readFile, writeFile } = promises;

start();

async function start() {
  const jsonStates = await readFile('./Estados.json');
  const statesList = JSON.parse(jsonStates);
  const jsonCities = await readFile('./Cidades.json');
  const citiesList = JSON.parse(jsonCities);

  statesList
    .forEach((element) => {
      //filtrar as cidades dando push no statesList como novo array de cidades[]
      citiesList.filter((cidade) => {
        cidade.Estado === element.ID;
      });
      element.push(
        `cidades: {"ID": ${cidade.ID},"Nome": ${cidade.Nome}, "Estado": ${cidade.Estado}}`
      );
    await writeFile(`${citiesList.Sigla}.json`, JSON.stringify(citiesList));
    })
*/