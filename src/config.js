const alfy = require("alfy");

const config = alfy.config;

const getTimerObject = () => {
	return config.get("timerObject") || null;
};

const setTimerObject = newTimerObject => {
	config.set("timerObject", newTimerObject);
	return getTimerObject();
};

module.exports = {
	setTimerObject,
	getTimerObject
};
