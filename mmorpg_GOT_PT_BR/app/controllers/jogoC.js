module.exports.jogo = function(app, req,res){

  if(!req.session.autorizado){
    res.send('Usuário precisa fazer login');
    return;
  }

  var comando_invalido = 'N';

  if(req.query.comando_invalido == 'S'){
    comando_invalido = 'S';
  }


  var usuario = req.session.usuario;
  var casa = req.session.casa;
  var connection = app.config.dbConnection;
  var jogoDAO = new app.app.models.JogoDAO(connection);

  jogoDAO.iniciaJogo(res, usuario, casa, comando_invalido);

}

module.exports.logout = function(app, req,res){
  req.session.destroy(function(err){
    res.render("index", {validacao: {}});
  });
}

module.exports.suditos = function(app, req,res){

  if(!req.session.autorizado){
    res.send('Usuário precisa fazer login');
    return;
  }
    res.render("aldeoes", {validacao: {}});
}

module.exports.pergaminhos = function(app, req,res){

  if(!req.session.autorizado){
    res.send('Usuário precisa fazer login');
    return;
  }
    res.render("pergaminhos", {validacao: {}});
}

module.exports.ordenar_acao_sudito = function(app, req,res){

  if(!req.session.autorizado){
    res.send('Usuário precisa fazer login');
    return;
  }

  var dadosForm = req.body;

  req.assert('acao',"Ação deve ser informada").notEmpty();
  req.assert('quantidade',"Quantidade deve ser informada").notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.redirect('jogo?comando_invalido=S');
    return;
  }

    res.render("pergaminhos", {validacao: {}});
}