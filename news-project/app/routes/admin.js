
module.exports = function (app) {
  app.get('/form_add', function (req, res) {
    res.render("admin/form_add_news");
  });

  app.post('/news/save', function (req, res) {
    var news = req.body;

    //connection
    var connection = app.config.dbConfig();
    //model
    var newsModel = new app.app.models.NewsDAO(connection);
    //save news
    newsModel.saveNews(news, function (error, result) {
      res.redirect("/newsletter");//Redirect to list page
    });

  });

}
