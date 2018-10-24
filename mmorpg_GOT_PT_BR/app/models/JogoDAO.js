function JogoDAO(connection){
    this._connection = connection();
}

JogoDAO.prototype.gerarParametros = function(usuario){
    this._connection.open(function(err, mongoclient){//abri conexao com o servidor e db
        mongoclient.collection("jogos", function(err, collection){//Pega a coleção
          collection.insert({
            usuario: usuario,
            moeda: 15,
            suditos: 10,
            temor: Math.floor(Math.random()*1000),
            sabedoria: Math.floor(Math.random()*1000),
            comercio: Math.floor(Math.random()*1000),
            magia: Math.floor(Math.random()*1000)
          });
    
          mongoclient.close();
        });
      });
}

JogoDAO.prototype.iniciaJogo = function(res, ausuario){

    this._connection.open(function(err, mongoclient){//abri conexao com o servidor e db
        mongoclient.collection("jogos", function(err, collection){//Pega a coleção
            console.log(collection);
            // collection.find({usuario:  usuario.usuario, senha:  usuario.senha}).toArray(function(err, result){
            collection.find({usuario: 'danny'}).toArray(function(err, result){
             
                console.log(result);


            });
    
    
    

            res.render('jogo',{img_casa: req.session.casa, jogo: result[0]});
          mongoclient.close();
        });


    });
}

module.exports = function(){
    return JogoDAO;
}