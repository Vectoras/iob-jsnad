"use strict";
const { promisify } = require("util");
const fs = require("node:fs");

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

// callback solution
opA((err, contents) => {
  print(err, contents);
  opB((err, contents) => {
    print(err, contents);
    opC((err, contents) => {
      print(err, contents);
    });
  });
});

// promise solution
const opAPromise = promisify(opA);
const opBPromise = promisify(opB);
const opCPromise = promisify(opC);

opAPromise()
  .then(print)
  .then(() => {
    opBPromise()
      .then(print)
      .then(() => {
        opCPromise().then(print);
      });
  });

// promise solution 2
opAPromise()
  .then((contents) => {
    print(null, contents);
    return opBPromise();
  })
  .then((contents) => {
    print(null, contents);
    return opCPromise();
  })
  .then((contents) => {
    print(null, contents);
  });
