function NewsDAO(connection ){
  this._connection = connection;
}

NewsDAO.prototype.getNewsletter = function(callback){
  this._connection.query("select * from tab_news order by create_date desc", callback);
}

NewsDAO.prototype.getNews = function(param_news, callback){
  this._connection.query("select * from tab_news where id_news = "+param_news.id_news, callback);
}

NewsDAO.prototype.saveNews = function(news, callback){
  this._connection.query('insert into tab_news set ?', news, callback);
}

NewsDAO.prototype.getLastNews = function(news, callback){
  this._connection.query('select * from tab_news order by event_date desc limit 5', news, callback);
}

module.exports = function(){

  return NewsDAO;

}