# DOM

## Introdução

- Document Object Model
- Representa uma árvore de objetos em memória

### querySelector

- Acessa elementos DOM um-a-um
- Parametros: Elemento / Classes / Id's

### queySelectorAll

- O retorno é do tipo NodeList. Para converter para array use `Array.from`

#### textContent

- Conteúdo textual de alguns elementos

## CSS com Javascript

### style

- Não é interessante injetarmos código CSS em nosso JavaScript
- Boa prática seria a adição e remoção de classes
- classList.add -> adiciona uma classe CSS
- classList.remove -> remove uma classe CSS
