module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.jogoC.jogo(application, req,res);
	});
	application.get('/logout', function(req, res){
		application.app.controllers.jogoC.logout(application, req,res);
	});
	application.get('/suditos', function(req, res){
		application.app.controllers.jogoC.suditos(application, req,res);
	});
	application.get('/pergaminhos', function(req, res){
		application.app.controllers.jogoC.pergaminhos(application, req,res);
	});
}