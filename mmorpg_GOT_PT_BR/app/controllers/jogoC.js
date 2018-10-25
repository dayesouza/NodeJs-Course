module.exports.jogo = function(app, req,res){

  if(!req.session.autorizado){
    res.send('Usuário precisa fazer login');
    return;
  }


  var usuario = req.session.usuario;
  var casa = req.session.casa;
  var connection = app.config.dbConnection;
  var jogoDAO = new app.app.models.JogoDAO(connection);

  jogoDAO.iniciaJogo(res, usuario, casa);

}

module.exports.logout = function(app, req,res){
  req.session.destroy(function(err){
    res.render("index", {validacao: {}});
  });
}

module.exports.suditos = function(app, req,res){
    res.render("aldeoes", {validacao: {}});
}

module.exports.pergaminhos = function(app, req,res){
    res.render("pergaminhos", {validacao: {}});
}