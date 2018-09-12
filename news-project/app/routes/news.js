module.exports = function (app) {

  app.get('/news', function (req, res) {

    var connection = app.config.dbConfig();
    var newsModel = new app.app.models.NewsDAO(connection);

    newsModel.getNews(function (error, result) {
      res.render("news/news", { news: result });
    });


  });

}
