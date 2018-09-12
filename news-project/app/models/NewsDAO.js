function NewsDAO(connection ){
  this._connection = connection;
}

NewsDAO.prototype.getNewsletter = function(callback){
  this._connection.query("select * from tab_news", callback);
}

NewsDAO.prototype.getNews = function(callback){
  this._connection.query("select * from tab_news where id_news = 1", callback);
}

NewsDAO.prototype.saveNews = function(news, callback){
  this._connection.query('insert into tab_news set ?', news, callback);
}

module.exports = function(){

  return NewsDAO;

}