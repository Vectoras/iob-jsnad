"use strict";

const child_process = require("child_process");
const path = require("path");

function exercise(myEnvVar) {
  // TODO return a child process with
  // a single environment variable set
  // named MY_ENV_VAR. The MY_ENV_VAR
  // environment variable's value should
  // be the value of the myEnvVar parameter
  // passed to this exercise function

  return child_process.spawn(process.execPath, [path.join(__dirname, "child.js")], {
    env: {
      MY_ENV_VAR: myEnvVar,
    },
  });
}

module.exports = exercise;
