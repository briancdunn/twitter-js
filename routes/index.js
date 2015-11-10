var express = require('express');
var router = express.Router();
var fs = require('fs');
var tweetBank = require('../tweetBank');

// router.use('/stylesheets/:file', function(req,res,next) {
// 	console.log('req.path ',req.path);
// 	res.sendFile('stylesheets/' + req.params.file, { root: __dirname + '/../public/' });
// });

router.use('/:dir', function(req,res,next) {
	var filepath = req.params.dir+req.path;
	console.log(__dirname+'/../public/'+filepath);
	fs.stat(__dirname+'/../public/'+filepath, function(err,stats) {
		if(stats.isFile()){
			res.sendFile(filepath, { root: __dirname + '/../public/' });
		}
		else {
			next();
		}
	});
	// console.log('req.path ',req.path);
	// res.sendFile('stylesheets/' + req.params.file, { root: __dirname + '/../public/' });
});

router.get('/', function(req,res) {
	var tweets = tweetBank.list();
	res.render('index', { title: 'Twitter.js', tweets: tweets });
});

module.exports = router;