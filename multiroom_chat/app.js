/* Import server config*/

var app = require('./config/server');

/* Listening port */
var server = app.listen(3000,function(req,res){
  console.log("Server online");
});

var io = require('socket.io').listen(server);

app.set('io', io );

/* Create websocket connection */

io.on('connection',function(socket){
  console.log("Socket connection");

  socket.on('disconnect',function(){
    console.log('User left');
  });



});
