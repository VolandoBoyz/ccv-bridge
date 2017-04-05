let config = require("config"),
    debug = require("debug")(process.env.npm_package_name + ":" + "app"),
    express = require("express"),
    app = express();

let start = listeningPort => {
    let server = app.listen(listeningPort, () => {
        debug("App running at http://localhost:" + server.address().port);
    });
    return server;
};

module.exports = start(config.get("listeningPort"));
