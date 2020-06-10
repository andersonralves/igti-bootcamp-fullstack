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
    '3 - 5 primeiros estados com o maior número de cidades:',
    await getStatesWithMoreCities()
  );

  // 4
  console.log(
    '4 - 5 primeiros estados com o menor número de cidades:',
    await getStatesWithLessCities()
  );

  // 5
  console.log(
    `5 - Cidades com MAIOR nome de cada estado`,
    await getBiggerOrSmallerNameCities(1)
  );

  // 6
  console.log(
    `6 - Cidades com MENOR nome de cada estado`,
    await getBiggerOrSmallerNameCities(2)
  );

  // 7
  console.log(
    `7 - Cidade de maior nome de todos os estados: `,
    await getBiggerOrSmallerCityName(true)
  );

  // 7
  console.log(
    `8 - Cidade de menor nome de todos os estados: `,
    await getBiggerOrSmallerCityName(false)
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

async function getStatesWithCities(type) {
  const states = JSON.parse(await fs.readFile('./files/Estados.json'));
  const list = [];

  for (state of states) {
    const count = await getCitiesCount(state.Sigla);
    list.push({ uf: state.Sigla, count });
  }

  list.sort((a, b) => b.count - a.count);

  const result = [];

  (type === 1 ? list.slice(0, 5) : list.slice(-5)).forEach((item) =>
    result.push(item.uf + ' - ' + item.count)
  );

  return result;
}

async function getStatesWithMoreCities() {
  return getStatesWithCities(1);
}

async function getStatesWithLessCities() {
  return getStatesWithCities(2);
}

async function getBiggerOrSmallerNameCities(type) {
  const states = JSON.parse(await fs.readFile('./files/Estados.json'));
  const result = [];
  let city = null;

  for (state of states) {
    if (type === 1) {
      city = await getBiggerName(state.Sigla);
    } else {
      city = await getSmallerName(state.Sigla);
    }
    result.push(city.Nome + ' - ' + state.Sigla);
  }

  return result;
}

async function getBiggerName(uf) {
  const cities = JSON.parse(await fs.readFile(`./states/${uf}.json`));

  let result;

  cities.forEach((city) => {
    if (!result) result = city;
    else if (city.Nome.length > result.Nome.length) {
      result = city;
    } else if (
      city.Nome.length === result.Nome.length &&
      city.Nome.toLowerCase() < result.Nome.toLowerCase()
    )
      result = city;
  });

  return result;
}

async function getSmallerName(uf) {
  const cities = JSON.parse(await fs.readFile(`./states/${uf}.json`));

  let result;

  cities.forEach((city) => {
    if (!result) result = city;
    else if (city.Nome.length < result.Nome.length) {
      result = city;
    } else if (
      city.Nome.length === result.Nome.length &&
      city.Nome.toLowerCase() < result.Nome.toLowerCase()
    )
      result = city;
  });

  return result;
}

async function getBiggerOrSmallerCityName(bigger) {
  const states = JSON.parse(await fs.readFile('files/Estados.json'));
  const list = [];
  let city = null;

  for (state of states) {
    if (bigger) {
      city = await getBiggerName(state.Sigla);
    } else {
      city = await getSmallerName(state.Sigla);
    }
    list.push({ name: city.Nome, uf: state.Sigla });
  }

  const result = list.reduce((prev, current) => {
    if (bigger) {
      if (prev.name.length > current.name.length) return prev;
      else if (prev.name.length < current.name.length) return current;
      else
        return prev.name.toLowerCase() < current.name.toLowerCase()
          ? prev
          : current;
    } else {
      if (prev.name.length < current.name.length) return prev;
      else if (prev.name.length > current.name.length) return current;
      else
        return prev.name.toLowerCase() < current.name.toLowerCase()
          ? prev
          : current;
    }
  });

  return `${result.name} - ${result.uf}`;
}
