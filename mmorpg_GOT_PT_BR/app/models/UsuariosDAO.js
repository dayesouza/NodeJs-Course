function UsuariosDAO(connection) {
  this._database = connection();//Underline é convenção para dizer que faz parte da função --restrição
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {//Metodo da classe

  this._database.open(function(err, mongoclient){//abri conexao com o servidor e db
    mongoclient.collection("usuarios", function(err, collection){//Pega a coleção
      collection.insert(usuario);

      mongoclient.close();
    });
  });

}

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {//Metodo da classe
  this._database.open(function(err, mongoclient){//abri conexao com o servidor e db
    mongoclient.collection("usuarios", function(err, collection){//Pega a coleção
        // collection.find({usuario:  usuario.usuario, senha:  usuario.senha}).toArray(function(err, result){
        collection.find(usuario).toArray(function(err, result){
          console.log(result);
          if(result[0] != undefined){
            req.session.autorizado = true;
            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;
          }
          if(req.session.autorizado){
            res.redirect("jogo");
          }
          else{
            res.render("index", {validacao: {}});
          }
        });



      mongoclient.close();
    });
  });


}

module.exports = function () {
  return UsuariosDAO;
}