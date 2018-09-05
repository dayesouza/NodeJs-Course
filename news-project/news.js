

var server = http.createServer( function(req, res){

  var category = req.url;

  if(category == '/tech'){
    res.end("<html><body>Tech News</body></html>");
  }
  else if(category == '/fashion'){
    res.end("<html><body>Fashion News</body></html>");
  }
  else{
    res.end("<html><body>News Portal</body></html>");
  }

});

server.listen(3000);