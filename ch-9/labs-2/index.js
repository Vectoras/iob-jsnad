"use strict";
const { EventEmitter } = require("events");

process.nextTick(console.log, "passed!");

const ee = new EventEmitter();

ee.addListener("error", (err) => {
  console.log(`Encountered error: ${err}`);
});

ee.emit("error", Error("timeout"));
