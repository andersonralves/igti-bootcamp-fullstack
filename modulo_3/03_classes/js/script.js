class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name);

    this.type = type;
  }

  speak() {
    console.log(`${this.name} (${this.type}) latindo...`);
  }
}

class Cat extends Animal {
  constructor(name, type) {
    super(name);

    this.type = type;
  }

  speak() {
    console.log(`${this.name} (${this.type}) latindo...`);
  }
}

const animal = new Animal('Tico');
const dog = new Dog('Tico', 'Pinscher');
const cat = new Dog('Han Solo', 'Frajola');

animal.speak();
dog.speak();
cat.speak();
