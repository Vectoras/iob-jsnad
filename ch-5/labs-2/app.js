const assert = require("assert");

// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

class Leopard {
  typeOfAnimal = "leopard";

  constructor(name) {
    this.name = name;
  }

  hiss() {
    console.log(`${this.name} the ${this.typeOfAnimal}: hiss`);
  }
}

class Lynx extends Leopard {
  typeOfAnimal = "lynx";

  constructor(name) {
    super(name);
  }

  purr() {
    console.log(`${this.name} the ${this.typeOfAnimal}: prrr`);
  }
}

class Cat extends Lynx {
  typeOfAnimal = "cat";

  constructor(name) {
    super(name);
  }

  meow() {
    console.log(`${this.name} the ${this.typeOfAnimal}: meow`);
  }
}

const felix = new Cat("Felix"); //TODO replace null with instantiation of a cat
felix.meow(); // prints Felix the cat: meow
felix.purr(); // prints Felix the cat: prrr
felix.hiss(); // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix);
const felixProtoProto = Object.getPrototypeOf(felixProto);
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto);

assert(Object.getOwnPropertyNames(felixProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(typeof felixProto.meow, "function");
assert(typeof felixProtoProto.purr, "function");
assert(typeof felixProtoProtoProto.hiss, "function");
console.log("prototype checks passed!");
