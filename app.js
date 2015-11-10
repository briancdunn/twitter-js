var express = require( 'express' );
var chalk = require('chalk');
var morgan = require('morgan');
var app = express(); // creates an instance of an express application
var port = 3000;

// app.use(function (req, res, next) {
// 	color(req,res);
//     // console.log(req.method,req.path);
// });

app.use(morgan('common'));

app.get('/news',function(req,res,next) {
	res.send('news\n');
});

app.listen(port, function() {
	console.log('Now listening on port ',port);
});

function color(req,res) {
	console.log(chalk.green(req.method),chalk.red(req.path));
}