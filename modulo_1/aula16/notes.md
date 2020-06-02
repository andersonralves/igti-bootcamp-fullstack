# Requisições HTTP com JavaScript

## Fetch
- Internamente trabalha com promisses
- Primeiro retorno de fetch são dados binários
- Em geral, convertermos esses dados para JSON, que retorna outra promisse

## Promises 
- São construções cuja execução **retorna algo no futuo**
- A execução pode ser resolvida (ok) ou rejeitada (erro)
- Resolvida (capturada no then), rejeitada (capturada no catch)
- Resolve parcialmene o problema do callback hell

## Async/await
- Açúcar sintático sobre promises
- Melhora a legibilidade do código
- Dá a impressão de código síncrono
- Deve-se decorar a função com async
- Toda instrução deve ser precedida de await