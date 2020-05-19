window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var globalInputName = null;
var globalIsEditing = false;
var globalCurrentIndex = null;

function start() {
  globalInputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
}

function preventFormSubmit() {

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {

  function insertName(newName) {
    globalNames.push(newName);
  }

  function updateName(newName) {
    globalNames[globalCurrentIndex] = newName;
    globalCurrentIndex = null;
  }

  function handleTyping(event) {
    var hasText = !!event.target.value && event.target.value.trim() !== '';
    if (!hasText) {
      clearInput();
      return;
    }

    if (event.key === "Enter") {
      let currentName = event.target.value.trim();

      if (globalIsEditing) {
        updateName(currentName);
      } else {
        insertName(currentName);
      }
      globalIsEditing = false

      render();
    }
  }

  globalInputName.addEventListener('keyup', handleTyping)
  globalInputName.focus();
}

function render() {

  function createDeleteButton(index) {

    function deleteName() {
      globalNames.splice(index, 1);

      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';

    button.addEventListener('click', deleteName);

    return button;
  }

  function createSpan(name, index) {

    function editItem() {
      globalInputName.value = name;
      globalInputName.focus();
      globalIsEditing = true;
      globalCurrentIndex = index;
    }

    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }

  divNames.appendChild(ul);

  clearInput();
}

function clearInput() {
  globalInputName.value = '';
  globalInputName.focus();
}