let express = require("express"),
	config = require("config"),
	app = express();

let start = listeningPort => {
	let server = app.listen(listeningPort, () => {
		console.log("App running at http://localhost:" + server.address().port);
	});
	return server;
};

module.exports = start(config.get("listeningPort"));
