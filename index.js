"use strict";
const alfy = require("alfy");
const notifier = require('node-notifier');

var sittingTimer;

function startSittingTimer() {
	sittingTimer = setInterval(function() {
		notifier.notify({
			'title': '5 seconds have passed!',
			'message': 'Stand up, take a walk, stretch a bit and come back to work.'
		})
	}, 5000);
}

function stopSittingTimer() {
	clearInterval(sittingTimer);
}

if (alfy.input == "sit") {
	startSittingTimer() &&
	notifier.notify({
		'title': 'Start working, I\'ll remind you',
		'message': 'Really...'
	});
}	else if (alfy.input == "stand") {
	stopSittingTimer() &&
	notifier.notify({
		'title': 'Call me when you need me',
		'message': 'Please do...'
	});
}
