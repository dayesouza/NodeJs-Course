http = require('http');

var buffer_body_response = [];

var options = {
  hostname: '196.200.0.116',
  port: '3100',
  path: '/',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-type' : 'application/json'
  }
};

var html = 'name=Joseph'; //x-www-form-urlencoded
var json = {
  name: 'Joseph'
}
var string_json = JSON.stringify(json);

var req = http.request(options, function(res){

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

req.write(string_json);

req.end();