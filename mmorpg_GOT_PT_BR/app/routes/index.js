module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.indexC.index(application, req, res);
	});
}