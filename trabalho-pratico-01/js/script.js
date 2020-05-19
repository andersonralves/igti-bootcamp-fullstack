window.addEventListener('load', start);

/*
Todo
(X) Limpar  e zerar os inputs
() Adicionar eventos on change nos ranges
( ) Exibir valor dos ranges nos inputs texts
   ( ) Alterar a cor da div
*/

function start() {
  console.log("start");

  clearInputsRangeAndSetEvenvChange();
  clearColorDiv();
}

// Zera os valores dos 'inputs' e seta o evento 'change' nos 'inputs range'
function clearInputsRangeAndSetEvenvChange() {
  function setEventChange(event) {
    var inputTextRed = document.querySelector('#inputTextRed');
    var inputTextGreen = document.querySelector('#inputTextGreen');
    var inputTextBlue = document.querySelector('#inputTextBlue');

    var inputRangeId = event.target.id;
    var inputRangeValue = event.target.value;

    switch (inputRangeId) {
      case "inputRangeRed":
        inputTextRed.value = inputRangeValue;
        break;

      case "inputRangeGreen":
        inputTextGreen.value = inputRangeValue;
        break;

      case "inputRangeBlue":
        inputTextBlue.value = inputRangeValue;
        break;
    }

    var color = {
      R: inputTextRed.value,
      G: inputTextGreen.value,
      B: inputTextBlue.value
    };

    setColorDiv(color.R, color.G, color.B);
    setDescriptionColor(color.R, color.G, color.B);
  }

  function setColorDiv(r, g, b) {
    document.querySelector('#resultRGB').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  function setDescriptionColor(r, g, b) {
    document.querySelector("#descriptionRGB").textContent = `rgb(${r}, ${g}, ${b})`;
  }

  var inputsRange = document.querySelectorAll('input');
  for (let i = 0; i < inputsRange.length; i++) {
    const inputRange = inputsRange[i];
    inputRange.value = 0;
    inputRange.addEventListener('change', setEventChange);
  }
}

// Remove a cor da div atribuindo rgb(0, 0, 0)
function clearColorDiv() {
  var div = document.querySelector('#resultRGB');
  div.style.backgroundColor = "rgb(0, 0, 0)";
}