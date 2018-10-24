module.exports.jogo = function(app, req,res){

  if(!req.session.autorizado){
    res.send('Usuário precisa fazer login');
    return;
  }


  var usuario = req.session.usuario;
  var connection = app.config.dbConnection;
  var jogoDAO = new app.app.models.JogoDAO(connection);

  jogoDAO.iniciaJogo(res, usuario);


}

module.exports.logout = function(app, req,res){

  req.session.destroy(function(err){
    res.render("index", {validacao: {}});
  });

}