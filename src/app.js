const osc = require('node-osc');
const colors = require('colors');
const oscToJSON = require('./oscToJSON');

const serverIp = '127.0.0.1'; // Communit Core Vision emiting IP
const serverPort = 3333;  // Communit Core Vision emiting PORT

const args = process.argv.slice(2);

const oscServer = new osc.Server(serverPort, serverIp);
// Listen for message stream
oscServer.on('message', function (message) {
    console.log(colors.blue('New message'));
    // Run in JSOn or in OSC mode
    args.indexOf('osc') === -1
    ? console.log(colors.green(JSON.stringify(oscToJSON(message), 0, 2)))
    : console.log(colors.green(JSON.stringify(message,0,3)));
});
