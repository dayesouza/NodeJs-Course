function JogoDAO(connection) {
  this._connection = connection();
  this._lista_acoes = [];
}

JogoDAO.prototype.gerarParametros = function(usuario) {
  //TODO: Fazer gerar dependendo da casa
  this._connection.open(function(err, mongoclient) {
    //abri conexao com o servidor e db
    mongoclient.collection("jogos", function(err, collection) {
      //Pega a coleção
      collection.insert({
        usuario: usuario,
        moeda: 15,
        suditos: 10,
        temor: Math.floor(Math.random() * 1000),
        sabedoria: Math.floor(Math.random() * 1000),
        comercio: Math.floor(Math.random() * 1000),
        magia: Math.floor(Math.random() * 1000)
      });

      mongoclient.close();
    });
  });
};

JogoDAO.prototype.iniciaJogo = function(res, usuario,casa, msg) {
  this._connection.open(function(err, mongoclient) {
    //abri conexao com o servidor e db
    mongoclient.collection("jogos", function(err, collection) {
      //Pega a coleção
      // collection.find({usuario:  usuario.usuario, senha:  usuario.senha}).toArray(function(err, result){
      collection.find({ usuario: usuario }).toArray(function(err, result) {


        res.render("jogo", {img_casa: casa, jogo: result[0], msg: msg})

        mongoclient.close();
      });

      mongoclient.close();
    });
  });
};

JogoDAO.prototype.acao = function(acao) {

  this._connection.open(function(err, mongoclient) {
    //abri conexao com o servidor e db
    mongoclient.collection("acoes", function(err, collection) {
      //Pega a coleção      
      acao.time_insercao = new Date().getTime();
      acao.acao = retornaAcao(acao.cod_acao);
      delete acao.cod_acao;
      collection.insert(acao); 

      mongoclient.close();
    });
  });

  function retornaAcao(codigo){
    for(var i = 0; i < this._lista_acoes.length; i++){
      console.log("codigo", codigo);

      if(this._lista_acoes[i].codigo == codigo){
        return this._lista_acoes[i];
      }
    }
  }
};

JogoDAO.prototype.getAcoesDisponiveis = function(usuario, res) {
  this._connection.open(function(err, mongoclient) {
    //abri conexao com o servidor e db
    mongoclient.collection("lista_acoes", function(err, collection) {
      //Pega a coleção
      // collection.find({usuario:  usuario.usuario, senha:  usuario.senha}).toArray(function(err, result){
      collection.find().toArray(function(err, result) {
        this._lista_acoes = result;
        res.render("aldeoes", {lista_acoes: result});     
        mongoclient.close();
      });

      mongoclient.close();
    });
  });

};

JogoDAO.prototype.getAcoes = function(usuario, res) {
  this._connection.open(function(err, mongoclient) {
    //abri conexao com o servidor e db
    mongoclient.collection("acoes", function(err, collection) {
      //Pega a coleção
      // collection.find({usuario:  usuario.usuario, senha:  usuario.senha}).toArray(function(err, result){
      collection.find({ usuario: usuario }).toArray(function(err, result) {
        res.render("pergaminhos", {acoes: result});
        mongoclient.close();
      });

      mongoclient.close();
    });
  });

};

module.exports = function() {
  return JogoDAO;
};
