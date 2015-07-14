// Les modules externes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');

// Les controlleurs
var controllers = require('/controllers');
var SignInCtrl = controllers.SignInCtrl;

app.set('port', 3333);
app.use(bodyParser.urlencoded({ extended: true }));





app.post('/login', SignInCtrl.login);


app.listen(app.get('port'), function() {
    console.log("Serveur démarré sur le port " + app.get('port'));
});