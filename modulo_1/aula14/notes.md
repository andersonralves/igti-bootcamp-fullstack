# Programação assíncrona

- Operações que podem ser lentas
  - Requisição de daos à APIs
  - Processamento intenso de dados
  - Comunicação com banco de dados (Node.js)
- É extremamente importante que o JavaScript **não** espere o término de instruções lentas
- A principal técnica é a utilização do **event loop**

## Event loop
- Funções a serem executas em uma pilha lógica de invocações (call stack)
- Quando a função utiliza Web APIs, ela precisa passar pelo evento loop, pois está sujeita à lentidões
- Executa uma função por vez e faz a orquestração que permite execução assíncrona
- Em geral, WEB APIs possuem callbacks