module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.jogoC.jogo(application, req,res);
	});
	application.get('/logout', function(req, res){


		application.app.controllers.jogoC.logout(application, req,res);


	});
}