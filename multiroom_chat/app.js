/* Import server config*/

var app = require('./config/server');

/* Listening port */
var server = app.listen(3000,function(req,res){
  console.log("Server online");
});

var io = require('socket.io').listen(server);

app.set('io', io );

/* Create websocket connection */

var array_participants = [];
io.on('connection',function(socket){
  console.log("Socket connection");



  socket.on('disconnect',function(data){
    console.log('User left');
  });

  socket.on('msgToServer',function(data){
    socket.emit('msgToClient',data);

    socket.broadcast.emit('msgToClient',data);
    
  })



});
