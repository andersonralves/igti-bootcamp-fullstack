var title = document.querySelector('h1');
title.textContent = 'Professor';

var city = document.querySelector('#city');
city.textContent = 'Bauru';

var data = Array.from(document.querySelectorAll(".data"));

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  element.classList.add('emphasis');
}