module.exports = function (app) {
  app.get('/newsletter', function (req, res) {
    res.render("news/newsletter");
  });

}
