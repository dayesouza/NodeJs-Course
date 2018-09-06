var dbConnection = require('../../config/dbConfig');

module.exports = function (app) {
  app.get('/newsletter', function (req, res) {

  connection = dbConnection();

  connection.query("select * from tab_news",function(error,result){
    res.render("news/newsletter", {news_list: result});
  });


  });

}
