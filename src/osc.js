const osc = require('node-osc');
const colors = require('colors');
const oscToJSON = require('./oscToJSON');
var events = require('events');
var eventEmitter = new events.EventEmitter();

const serverIp = '127.0.0.1'; // Communit Core Vision emiting IP
const serverPort = 3333;  // Communit Core Vision emiting PORT
const args = process.argv.slice(2);

// OSC
const oscServer = new osc.Server(serverPort, serverIp);
// Listen for message stream
oscServer.on('message', function (message) {
    console.log(colors.blue('New message'));
    // Run in JSOn or in OSC mode
    const OSCOutput = args.indexOf('osc') === -1
    ? colors.green(JSON.stringify(oscToJSON(message), 0, 2))
    : colors.green(JSON.stringify(message,0,3));
    eventEmitter.emit('OSC', OSCOutput);
});

eventEmitter.on('OSC', function(msg){
    console.log(msg);
});
