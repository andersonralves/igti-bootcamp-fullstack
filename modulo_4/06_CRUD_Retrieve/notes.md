# CRUD - Retrieve

`db.COLLECTION.find(query, projection)`

## Selecionando os campos que quero

`db.student.find({}, {_id: 0, name: 1, value: 1})`

## Limit

Limita a exibição dos documentos

`db.student.find({}, {_id: 0, name: 1, value: 1}).limit(4)`

## Skip

'Pula' a quantidade de documentos determinados

`db.student.find({}, {_id: 0, name: 1, value: 1}).limit(4).skip(1)`

## Sort

`db.student.find({}, {_id: 0, name: 1, value: 1}).sort({name: 1})`
`db.student.find({}, {_id: 0, name: 1, value: 1}).sort({name: -1})`

## Pretty

`db.student.find({}, {}).pretty()`

## findOne

`db.student.findOne()`
`db.student.findOne(query, projection)`
`db.student.findOne({"name": "Paulo"})`

## Operadores Lógicos

### AND

`db.student.find({$and: [{"name": "Pedro"}, {"subject": "Matematica"}]})`

### NOR

`db.student.find({$nor: [{"name": "Pedro"}, {"subject": "Matematica"}]})`

### OR

`db.student.find({$or: [{"subject": "Informatica"}, {"subject": "Matematica"}]})`

## Operadores Comparacao

### eq

`db.student.find({value: {$gt: 20}})`

### gt

### gte

### in

`db.student.find({subject: {$in: ["Informatica", "Matematica"]}})`

### lt

### lte

### nt

### nin
