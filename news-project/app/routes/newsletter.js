module.exports = function (app) {

  app.get('/newsletter', function (req, res) {

    var connection = app.config.dbConfig();

    var newsModel = new app.app.models.NewsDAO(connection);

    newsModel.getNewsletter(function (error, result) {
      res.render("news/newsletter", { news_list: result });
    });


  });

}
