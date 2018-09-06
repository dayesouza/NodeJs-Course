var mysql = require('mysql');

var connect_str = require('./mysql_config');
module.exports = function(){
  return mysql.createConnection(connect_str());
}