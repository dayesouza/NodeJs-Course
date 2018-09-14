module.exports.form_add_news = function(app, req, res){
  res.render("admin/form_add_news",{validation: {}, news: {}});
}

module.exports.save_news = function(app, req, res){
  var news = req.body;

  req.check("title","Title is mandatory!").notEmpty();
  req.check("summary","Summary must be at least 5 characters!").len(5);
  req.check("author","Author is mandatory!").notEmpty();
  req.check("event_date","Event date is mandatory!").notEmpty().isISO8601('yyyy-mm-dd');
  req.check("news","News is mandatory!").notEmpty();
  
  var errors = req.validationErrors();
  if(errors){
    res.render("admin/form_add_news", {validation: errors, news: news});
    return;
  }

  //connection
  var connection = app.config.dbConfig();
  //model
  var newsDAO = new app.app.models.NewsDAO(connection);
  //save news
  newsDAO.saveNews(news, function (error, result) {
    res.redirect("/newsletter");//Redirect to list page
  });
}