const assert = require("assert");

// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

const leopard = {
  animalType: "leopard",
  hiss: function (sound = "hsss") {
    console.log(`${this.name} the ${this.animalType}: ${sound}`);
  },
};

const lynx = Object.create(leopard, {
  animalType: { value: "lynx" },
  purr: {
    value: function () {
      leopard.hiss.call(this, "prrr");
    },
  },
});

const cat = Object.create(lynx, {
  animalType: { value: "cat" },
  meow: {
    value: function () {
      leopard.hiss.call(this, "meow");
    },
  },
});

const felix = Object.create(cat, {
  name: { value: "Felix" },
}); //TODO replace null with instantiation of a cat
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