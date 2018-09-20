/* Import server config*/

var app = require('./config/server');

/* Listening port */

app.listen(3000,function(req,res){
  console.log("Server online");
});