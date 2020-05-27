'use strict';

/**
 * Estado da aplicação
 */

const globalUrlApi = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';
let globalUsers = [];

let globalSearchInput = null;
let globalSearchButton = null;

let globalTotalUsers = null;
let globalUsersList = null;

let globalStatistics = null;

let globalUsersDefaultMessage = null;
let globalStatisticsDefaultMessage = null;

let numberFormat = null;

window.addEventListener('load', () => {

  globalSearchInput = document.querySelector('#searchInput');
  globalSearchButton = document.querySelector('#searchButton');

  globalTotalUsers = document.querySelector('#totalUsers');
  globalUsersList = document.querySelector('#usersList');

  globalStatistics = document.querySelector('#statistics');

  globalUsersDefaultMessage = document.querySelector('#usersDefaultMessage');
  globalStatisticsDefaultMessage = document.querySelector('#statisticsDefaultMessage');

  numberFormat = Intl.NumberFormat('pt-BR');

  setDefaultMessages();
  getUsers();
});

function setDefaultMessages() {
  globalUsersDefaultMessage.innerHTML = 'Nenhum usuário filtrado';
  globalStatisticsDefaultMessage.innerHTML = 'Nada a ser exibido';
}

function clearDefaultMessages() {
  globalUsersDefaultMessage.innerHTML = '';
  globalStatisticsDefaultMessage.innerHTML = '';
}

async function getUsers() {

  const res = await fetch(globalUrlApi);
  const json = await res.json();


  // Pegando dados de people.js. Remover após implementação;

  //const json = globalUsersFile;

  globalUsers = json.results.map(user => {

    return {
      name: user.name.first + ' ' + user.name.last,
      picture: user.picture.thumbnail,
      age: user.dob.age,
      gender: user.gender
    }
  });

  handleSearchInput();
  handleSearchButton();
}

function handleSearchInput() {

  function changeStatusButton(input) {
    if (input.value.length > 0) {
      clearDefaultMessages();
      globalSearchButton.disabled = false;
      return;
    }

    setDefaultMessages();
    globalSearchButton.disabled = true;
  }

  globalSearchInput.addEventListener('keyup', (event) => {
    changeStatusButton(event.target);

    if (globalSearchInput.value.trim().length === 0) {
      clearData();
      return;
    }

    if (event.key === 'Enter')
      filterUsers();
  });
}

function handleSearchButton() {
  globalSearchButton.addEventListener('click', () => {
    filterUsers();

    globalSearchInput.focus();
  });
}

function filterUsers() {
  console.log(globalUsers);
  const filteredUsers = globalUsers.filter((el) => {
    return el.name.toLowerCase().indexOf(globalSearchInput.value.toLowerCase()) >= 0;
  }).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  summaryTotalUsers(filteredUsers);
  listUsers(filteredUsers);
  showStatistics(filteredUsers);
}

function clearData() {
  globalTotalUsers.innerHTML = "";
  globalUsersList.innerHTML = "";
  globalStatistics.innerHTML = "";
}

function summaryTotalUsers(filteredUsers) {
  globalTotalUsers.innerHTML = `<h4>${filteredUsers.length} usuário(s) encontrado(s)</h2>`;
}

function listUsers(filteredUsers) {

  let usersHTML = '<div>';

  filteredUsers.forEach(user => {
    const {
      picture,
      name,
      age
    } = user;

    const userHTML = `
      <div class="user">
        <div class="avatar">
          <img src="${picture}">
        </div>
        <div class="name">
          ${name},
        </div>
        <div>
          ${age} anos
        </div>        
      </div>
    `;

    usersHTML += userHTML;
  })

  usersHTML += '</div>';

  globalUsersList.innerHTML = usersHTML;
}

function showStatistics(filteredUsers) {

  if (filteredUsers.length === 0) {
    return;
  }

  const totalUsersMale = filteredUsers.reduce((acc, person) => {
    return (person.gender === 'male' ? acc + 1 : acc)
  }, 0);

  const totalUsersFemale = filteredUsers.reduce((acc, person) => {
    return (person.gender === 'female' ? acc + 1 : acc)
  }, 0);

  const sumAges = filteredUsers.reduce((acc, person) => acc + person.age, 0);

  const averageAges = sumAges / (totalUsersMale + totalUsersFemale);

  let statisticsHTML = `<div class="statistics-summary">
    <h4>Estatísticas</h4>
    <div class="male">
      Sexo masculino: <span>${totalUsersMale}</span>
    </div>
    <div class="female">
      Sexo feminino: <span>${totalUsersFemale}</span>
    </div>
    <div class="ages">
      Soma das idades: <span>${sumAges}</span>
    </div>
    <div class="average">
      Média das idades: <span>${formatNumber(averageAges.toFixed(2))}</span>
    </div>

  </div>
  `;

  globalStatistics.innerHTML = statisticsHTML;
}

function formatNumber(number) {
  return numberFormat.format(number);
}