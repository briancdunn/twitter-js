var express = require('express');
var fs = require('fs');
var bp = require('body-parser');

var tweetBank = require('../tweetBank');

// router.use('/stylesheets/:file', function(req,res,next) {
// 	console.log('req.path ',req.path);
// 	res.sendFile('stylesheets/' + req.params.file, { root: __dirname + '/../public/' });
// });
module.exports = function(io) {
	var urlencodedParser = bp.urlencoded({ extended: false })

	var router = express.Router();

	//check if something in public/ is trying to be accessed.
	router.use('/:dir', function(req,res,next) {
		var filepath = req.params.dir+req.path;
		console.log(__dirname+'/../public/'+filepath);
		fs.stat(__dirname+'/../public/'+filepath, function(err,stats) {
			if(stats && stats.isFile()){
				//grab stuff from the public folder
				res.sendFile(filepath, { root: __dirname + '/../public/' });
			}
			else {
				//render the page
				next();
			}

		});
	});

	router.get('/', function(req,res) {
		console.log("HERE");
		var tweets = tweetBank.list();
		res.render('index', { showForm: true, title: 'All Tweets', tweets: tweets });
	});

	//route to get tweets by users/username
	router.get('/users/:userName', function(req, res, next){
		//create tweets array
		console.log("userName: "+ req.params.userName);
		var userTweets = tweetBank.find({name: req.params.userName});
		console.log(userTweets);
		res.render('index', { showForm: true, name:req.params.userName, title: 'tweets by ' + req.params.userName, tweets: userTweets });
	});


	//post new tweet:
	router.post('/submit', urlencodedParser, function (req, res) {
		console.log(req.body);
		tweetBank.add(req.body.name, req.body.text);
		io.sockets.emit('new_tweet', { nam: req.body.name, text: req.body.text });
		//route to new user
		res.redirect('/');
	});

	return router;
};