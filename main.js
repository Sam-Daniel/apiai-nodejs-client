var apiai = require('apiai');

var app = apiai("<your client access token>", "a3f1b9c5a35d45d49f2e26c5f8bcc946");

function ask(text, options) {
	return new Promise((resolve, reject) => {
		var defaultOptions = {
			sessionId: '<unique session id>', // use any arbitrary id - doesn't matter
		};

		let request = app.textRequest(text, Object.assign(defaultOptions, options));

		request.on('response', (response) => {
			return resolve(response);
		});

		request.on('error', (error) => {
			return reject(error);
		});

		request.end();
	})
}

function getAllIntents(options) {
	return new Promise((resolve, reject) => {
		let request = app.intentGetRequest(options);

		request.on('response', (response) => {
			return resolve(response);
		});

		request.on('error', (error) => {
			return reject(error);
		});

		request.end();
	})
}

// ask something
ask('<Your text query>')
	.then(response => {
		console.log(response);
	}).catch(error => {
		console.log(error)
	});
	
// get list of all intents
getAllIntents()
	.then(intents => {
		console.log(intents);
	}).catch(error => {
		console.log(error)
	});
