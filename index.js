"use strict";

const alfy = require("alfy");
const notifier = require("node-notifier");
const myConfig = require("./src/config.js");

myConfig.setTimerObject(alfy.input);

alfy.log(myConfig.getTimerObject());
