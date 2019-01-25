http = require('http');

var buffer_body_response = [];

var options = {
  hostname: '196.200.0.116',
  port: '8000',
  path: '/',
  headers: {
    'Accept': 'application/json'
  }
};

http.get(options, function(res){
  res.on("data", function(piece){
    buffer_body_response.push(piece);
  })
  res.on('end', function(){
    var body_response = Buffer.concat(buffer_body_response).toString();
    console.log(body_response);
  })
  //res.on( 'error', function(){

 // })
});