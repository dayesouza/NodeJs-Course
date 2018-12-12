/*Import module */
var crypto = require("crypto");

function UsuariosDAO(connection) {
  this._database = connection();//Underline é convenção para dizer que faz parte da função --restrição
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {//Metodo da classe

  this._database.open(function(err, mongoclient){//abri conexao com o servidor e db
    mongoclient.collection("usuarios", function(err, collection){//Pega a coleção

      usuario.senha = criptografar(usuario.senha);
      collection.insert(usuario);

      mongoclient.close();
    });
  });

}

function criptografar(dado){
  return crypto.createHash("md5").update(dado).digest("hex");
}

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {//Metodo da classe
  this._database.open(function(err, mongoclient){//abri conexao com o servidor e db
    mongoclient.collection("usuarios", function(err, collection){//Pega a coleção
        
      usuario.senha = criptografar(usuario.senha);
        collection.find(usuario).toArray(function(err, result){
          if(result[0] != undefined){
            req.session.autorizado = true;
            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;
          }

          mongoclient.close();
          
          if(req.session.autorizado){
            res.redirect("jogo");
            return;
          }
          else{
            res.render("index", {validacao: {}});
          }
        });

    });
  });


}

module.exports = function () {
  return UsuariosDAO;
}