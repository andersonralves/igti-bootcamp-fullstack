'use strict';

let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let globalInputName = null;
let globalIsEditing = false;
let globalCurrentIndex = null;

window.addEventListener('load', () => {
  globalInputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
});

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    //globalNames.push(newName);
    globalNames = [...globalNames, newName];
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

    if (event.key === 'Enter') {
      let currentName = event.target.value.trim();

      if (globalIsEditing) {
        updateName(currentName);
      } else {
        insertName(currentName);
      }
      globalIsEditing = false;

      render();
    }
  }

  globalInputName.addEventListener('keyup', handleTyping);
  globalInputName.focus();
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      //globalNames.splice(index, 1);

      // globalNames = globalNames.filter((name, i) => {
      // if (i === index) {
      //   return false;
      // }
      // return true;

      //   return i !== index;
      // });

      globalNames = globalNames.filter((_, i) => i !== index);

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

// function clearInput() {
//   globalInputName.value = '';
//   globalInputName.focus();
// }

const clearInput = () => {
  globalInputName.value = '';
  globalInputName.focus();
};
