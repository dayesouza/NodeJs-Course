module.exports = function (app) {
  
  app.get('/form_add', function (req, res) {
    app.app.controllers.adminC.form_add_news(app, req, res);
  });

  app.post('/news/save', function (req, res) {
    app.app.controllers.adminC.save_news(app, req, res);
  });

}
