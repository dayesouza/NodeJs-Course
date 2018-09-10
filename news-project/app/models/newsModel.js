module.exports = function(){
  this.getNewsletter = function(connection, callback){
    connection.query("select * from tab_news", callback);
  }

  this.getNews = function(connection, callback){
    connection.query("select * from tab_news where id_news = 1", callback);
  }

  return this;

}