module.exports = function(application){
	application.get('/', function(req, res){

		res.format({
			html: function(){
				res.send('Welcome to your app NodeJS!');
			},
			json: function(){
				var retorno = {
					body: 'Welcome to your app NodeJS!'
				}
				res.json(retorno);
			}
		});
	});
}