var express = require('express');
var consign = require('consign');

var app = express();
app.set('views','./app/views');
app.set('view engine','ejs');

//Include modules from folder routes into the app
consign()
.include('app/routes')
.then('config/dbConfig.js')
.then('app/models')
.into(app);

module.exports = app;