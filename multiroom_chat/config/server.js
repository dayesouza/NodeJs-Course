/* Import express module*/
var express = require('express');

/* Import consign module */
var consign = require('consign');

/* Import body-parser */
var bodyParser = require('body-parser');

/* Import express-validator */
var expressValidator = require('express-validator');

var app = express();

/* Set 'view engine' and 'views' express variables */
app.set('view engine','ejs');
app.set('views','./app/views');

/* middlewares config */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* Autoload */
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);


/* export app object */
module.exports = app;