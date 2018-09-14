module.exports = function(app){

  app.get('/', function (req, res) {
    app.app.controllers.homeC.index(app,req,res);
  });
}

