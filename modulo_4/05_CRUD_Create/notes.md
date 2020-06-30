# CRUD Create

## Insere um registro

```
db.student.insertOne({
"name": "Maria dos Anjos"
});
```

## Insere vários registros

```
db.student.insertMany([
{
"name": "Pedro",
"subject": "Matematica",
"type": "Trabalho Pratico"
},
{
"name": "Paulo",
"subject": "Portugues",
"type": "Prova Final"
}
]);
```

## Insere um registro

```
db.student.insert({
"name": "Joao",
"subject": "Informatica",
"type": "Trabalho Pratico"
});
```

## Insere vários registros

```
db.student.insert([
{
"name": "Marcia",
},
{
"name": "Ed",
"value": 10
}
]);

```

```

```
