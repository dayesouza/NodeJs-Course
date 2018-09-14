module.exports = function (app) {

  app.get('/news', function (req, res) {
    app.app.controllers.newsC.news(app, req, res);
  });

  app.get('/newsletter', function (req, res) {
    app.app.controllers.newsC.newsletter(app, req, res);
  });

}
