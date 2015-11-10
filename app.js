var express = require( 'express' );
var chalk = require('chalk');
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes/');

var app = express(); // creates an instance of an express application
var port = 3000;


app.use('/', routes);


// Setting up app to default to swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use(morgan('common'));

app.use('/', routes);

app.listen(port, function() {
	console.log('Now listening on port ',port);
});