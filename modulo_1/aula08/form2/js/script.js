window.addEventListener('load', start);

function start() {
  console.log('Página totalmente carregada');

  var nameInput = document.querySelector("#name");
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {

  let count = event.target.value;

  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector("#name");
  alert(nameInput.value + " cadastrado com sucesso")
}