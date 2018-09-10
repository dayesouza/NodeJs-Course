module.exports = function (app) {

  app.get('/newsletter', function (req, res) {

    var connection = app.config.dbConfig();

    var newsModel = app.app.models.newsModel;

    newsModel.getNewsletter(connection, function (error, result) {
      res.render("news/newsletter", { news_list: result });
    });


  });

}
