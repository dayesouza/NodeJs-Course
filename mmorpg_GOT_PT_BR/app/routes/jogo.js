module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.jogoC.jogo(application, req,res);
	});
}