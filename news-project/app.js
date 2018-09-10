var app = require("./config/server");


// var routeHome = require('./app/routes/home')(app);

// var routeNews = require('./app/routes/newsletter')(app);

// var routeAdd = require('./app/routes/form_add_news')(app);

app.listen(3000,function(req,res){
  console.log("Server ON");
});