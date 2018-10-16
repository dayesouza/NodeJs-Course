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

module.exports = function () {
  return UsuariosDAO;
}