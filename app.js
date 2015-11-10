var express = require( 'express' );
var chalk = require('chalk');
var morgan = require('morgan');
var swig = require('swig');

var app = express(); // creates an instance of an express application
var port = 3000;


// Setting up app to default to swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });


// app.use(function (req, res, next) {
// 	color(req,res);
//     // console.log(req.method,req.path);
// });
// });
var peopleArr = {title: "Hello World", people: [
{name: "Tom"}, {name: "Dave"}, {name: "Dan"}
]};



app.use(morgan('common'));

app.get('/news',function(req,res,next) {
	//res.send('news\n');
	//swig.renderFile('./views/index.html', peopleArr, function(err, output){
	res.render('index', peopleArr);
});

app.listen(port, function() {
	console.log('Now listening on port ',port);
});




function color(req,res) {
	console.log(chalk.green(req.method),chalk.red(req.path));
}