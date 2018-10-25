function JogoDAO(connection) {
  this._connection = connection();
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

JogoDAO.prototype.iniciaJogo = function(res, usuario,casa) {
  this._connection.open(function(err, mongoclient) {
    //abri conexao com o servidor e db
    mongoclient.collection("jogos", function(err, collection) {
      //Pega a coleção
      // collection.find({usuario:  usuario.usuario, senha:  usuario.senha}).toArray(function(err, result){
      collection.find({ usuario: usuario }).toArray(function(err, result) {


        res.render("jogo", {img_casa: casa, jogo: result[0]})

        mongoclient.close();
      });

      mongoclient.close();
    });
  });
};

module.exports = function() {
  return JogoDAO;
};
