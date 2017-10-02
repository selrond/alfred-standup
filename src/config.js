const alfy = require("alfy");

const config = alfy.config;

const getTimerObject = () => {
	return config.store || "Got nothing...";
};

const setTimerObject = newTimerObject => {
	config.set(newTimerObject);
	return newTimerObject;
};

module.exports = {
	setTimerObject,
	getTimerObject
};
