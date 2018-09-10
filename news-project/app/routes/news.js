module.exports = function (app) {

  app.get('/news', function (req, res) {

    var connection = app.config.dbConfig();
    var newsModel = app.app.models.newsModel;

    newsModel.getNews(connection, function (error, result) {
      res.render("news/news", { news: result });
    });


  });

}
