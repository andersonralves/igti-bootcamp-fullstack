const fs = require('fs').promises;

init();

async function init() {
  // 1
  await createFiles();

  // 2
  let uf = 'SP';
  console.log(
    `2 - Quantidade de cidades do estado de ${uf}: ` +
      (await getCitiesCount(uf))
  );

  // 3
  console.log(
    '3 - 5 estados com maior número de cidades:',
    await getStatesWithMoreCities()
  );
}

async function createFiles() {
  let data = await fs.readFile('./files/Estados.json');
  const states = JSON.parse(data);

  data = await fs.readFile('./files/Cidades.json');
  const cities = JSON.parse(data);

  for (state of states) {
    const stateCities = cities.filter((city) => city.Estado === state.ID);
    await fs.writeFile(
      `./states/${state.Sigla}.json`,
      JSON.stringify(stateCities)
    );
  }

  console.log('1 - Arquivos criados com sucesso!');
}

async function getCitiesCount(uf) {
  const data = await fs.readFile(`./states/${uf}.json`);
  let cities = JSON.parse(data);

  return cities.length;
}

async function getStatesWithMoreCities() {
  const states = JSON.parse(await fs.readFile('./files/Estados.json'));
  const list = [];

  for (state of states) {
    const count = await getCitiesCount(state.Sigla);
    list.push({ uf: state.Sigla, count });
  }

  const result = [];
  list
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .forEach((item) => {
      result.push(item.uf + ' - ' + item.count);
    });

  return result;
}
