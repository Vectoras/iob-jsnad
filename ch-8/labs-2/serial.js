"use strict";
const { promisify } = require("util");

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

// promise solutions

const promiseA = promisify(opA);
const promiseB = promisify(opB);
const promiseC = promisify(opC);

promiseA()
  .then((result) => print(null, result))
  .catch((err) => print(err))
  .then(() => {
    promiseB()
      .then((result) => print(null, result))
      .catch((err) => print(err))
      .then(() => {
        promiseC()
          .then((result) => print(null, result))
          .catch((err) => {
            print(err);
          });
      });
  });

promiseA()
  .then((result) => print(null, result))
  .catch((err) => print(err))
  .then(() => {
    return promiseB();
  })
  .then((result) => print(null, result))
  .catch((err) => print(err))
  .then(() => {
    return promiseC();
  })
  .then((result) => print(null, result))
  .catch((err) => {
    print(err);
  });

promiseA()
  .then((result) => {
    print(null, result);
    return promiseB();
  })
  .catch((err) => print(err))
  .then((result) => {
    print(null, result);
    return promiseC();
  })
  .catch((err) => print(err))
  .then((result) => print(null, result))
  .catch((err) => {
    print(err);
  });

// callback solution

opA((err, result) => {
  print(err, result);
  opB((err, result) => {
    print(err, result);
    opC((err, result) => {
      print(err, result);
    });
  });
});
