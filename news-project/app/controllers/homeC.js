module.exports.index = function (app, req, res) {

  var connection = app.config.dbConfig();
  var newsModel = new app.app.models.NewsDAO(connection);

  newsModel.getLastNews(function(error,result){
    res.render("home/index",{news: result});
  });

 // res.render("home/index");
}