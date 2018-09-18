module.exports.news = function (app, req, res) {

  var connection = app.config.dbConfig();
  var newsModel = new app.app.models.NewsDAO(connection);
  var id_news = req.query;

  newsModel.getNews(id_news,function (error, result) {
    res.render("news/news", { news: result });
  });
}

module.exports.newsletter = function (app, req, res) {

  var connection = app.config.dbConfig();
  var newsModel = new app.app.models.NewsDAO(connection);


  newsModel.getNewsletter(function (error, result) {
    res.render("news/newsletter", { news_list: result });
  });
}