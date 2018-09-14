var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

var app = express();
app.set('views','./app/views');
app.set('view engine','ejs');

//middleware request and response
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

//Include modules from folder routes into the app
consign()
.include('app/routes')
.then('config/dbConfig.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;