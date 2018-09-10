var mysql = require('mysql');

var connMySQL = function(){
  return mysql.createConnection(connect_str());
}

var connect_str = require('./mysql_config');
module.exports = function(){
  return connMySQL;
}