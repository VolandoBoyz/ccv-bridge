var http = require('http').Server();
var io = require('socket.io')(http);

// Server setting up
http.listen(5000, function(){
    console.log('listening on *:5000');
});

// SERVER
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('hi', function(msg){
        console.log('message: ' + msg);
    });
    socket.emit('hiback','loooool');
});
