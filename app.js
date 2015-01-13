// set variables for the environment
var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var info = require('./data/info.json');
var skills = require('./data/skills.json');
var	path = require('path');
var	favicon = require('serve-favicon');
var logger 	= require('morgan');
var	cookieParser = require('cookie-parser');
var	bodyParser = require('body-parser');
var	methodOverride = require('method-override');
var	session = require('express-session');
var	flash = require('connect-flash');






// =============== EXPRESS ===============



var port = process.env.PORT || 1221;


app.use(favicon(__dirname + '/favicons/favicon.ico'));
// app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(flash());
app.use(session({secret: 'xolstice', saveUninitialized: true, resave: true}));


// =============== Crashing and reporting ===============

process.on('uncaughtException', function(err) {
	console.log('Today was not a good day to die:', err)
	// pg.end();
	process.exit(0);
})

process.on('Error', function(err) {
	console.log('Yup, that just happened:', err)
	// pg.end();
	process.exit(0);
})

process.on('ReferenceError', function(err) {
	console.log('Reference Error and now I have to go:', err)
	// pg.end();
	process.exit(0);
})


process.stdin.resume();

process.on('SIGINT', function() {
	console.log('Got a SIGINT. Cleaning up and ending');
	// deallocate statements
	// pg.end();
	process.exit(0);
})


// =============== Jade ===============

// views as directory for all template files
app.use(express.static(__dirname));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// =============== ROUTES ===============

app.get('/', function(req, res) {
  res.render('layout');
});

// path to get info insecurely
app.get('/info/insecure', function(req, res) {
	res.send(info);
})
//  path to get skills insecurely
app.get('/skills/insecure', function(req, res) {
	res.send(skills);
})

app.listen(port);

console.log('winning at '+ port);
