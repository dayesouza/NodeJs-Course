module.exports = function (app) {
  app.get('/newsletter', function (req, res) {

  var mysql = require('mysql');
  var connect_str = require('../../config/mysql_config');
console.log(connect_str());
  var connection = mysql.createConnection(connect_str());

  connection.query("select * from tab_news",function(error,result){
    res.send(result);
  });

    //res.render("news/newsletter");
  });

}
