'use strict';

window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

// prettier-ignore
function doSpread() {
  const marriedMen = people.results.filter(person => person.name.title === 'Mr');
  const marriedWomen = people.results.filter(person => person.name.title === 'Ms');
  const marriedPeoples = [...marriedMen, ...marriedWomen, {foo: "bar"}];

  console.log(marriedMen);
  console.log(marriedWomen);
  console.log(marriedPeoples);
}

function doRest() {
  console.log(infiniteSum(1, 2, 3));
  console.log(infiniteSum(300, 200, 500));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  const first = people.results[0];

  // Repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  // Usando destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}
