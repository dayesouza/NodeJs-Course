var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));

var port = 3100;

app.listen(port);

var db = new mongodb.Db(
  'instagram',
  new mongodb.Server('localhost', 27017,{}),
  {}
);
console.log("Server HTTP listening on port "+port);

app.get('/',function(req, res){
  res.send({ msg: 'hello'});
})

app.post('/api',function(req, res){
  var data = req.body;

  db.open(function(err, mongoclient){
    mongoclient.collection('posts',function(err, collection){
      collection.insert(data,function(err, records){
        if(err){
          res.json(err);
        }
        else{
          res.json(records);
        }
        mongoclient.close();
      });
    })
  })

})