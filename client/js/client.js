var socket = io.connect('http://localhost:5000');
var OSCStream;
var ID = Date.now();

socket.on('connect', function () {
    socket.emit('hi', ID);
});

socket.on('osc-stream', function(msg){
    var  OSCStream = msg;
});
