"use strict";

const alfy = require("alfy");
const notifier = require("node-notifier");
const util = require("./utils");

util.cron(() => alfy.log("tick"), 3000);
