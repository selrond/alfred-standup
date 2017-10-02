const alfy = require("alfy");

const util = module.exports;

util.generateRandomString = stringLength => {
	var randomString = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (let i = 0; i < stringLength; i++) randomString += possible.charAt(Math.floor(Math.random() * possible.length));
	return randomString;
};

util.cron = (fn, delay, ...args) => {
	const next = alfy.config.has("next") ? alfy.config.get("next") : Date.now() + delay;
	alfy.config.set("next", next);

	let timeout = setTimeout(function tick() {
		alfy.config.set("next", Date.now() + delay);
		fn(...args);
		timeout = setTimeout(tick, delay);
	}, next - Date.now());

	return () => {
		clearTimeout(timeout);
		alfy.config.delete("next");
	};
};

util.stopCron = util.cron(() => {
	console.log("This is a heartbeat");
}, 3000);
