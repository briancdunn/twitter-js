var _ = require('underscore');

var data =  [
  { name: 'EmmaGatsby',
    text: 'Fullstack Academy is amazing! The instructors are just so sexy. #fullstacklove #codedreams' },
  { name: 'DaveDash',
    text: 'Fullstack Academy is sexy! The instructors are just so mindblowing. #fullstacklove #codedreams' },
  { name: 'EmmaNerd',
    text: 'Fullstack Academy is breathtaking! The instructors are just so breathtaking. #fullstacklove #codedreams' },
  { name: 'EmmaAshby',
    text: 'Fullstack Academy is awesome! The instructors are just so breathtaking. #fullstacklove #codedreams' },
  { name: 'NimitNerd',
    text: 'Fullstack Academy is cool! The instructors are just so sweet. #fullstacklove #codedreams' },
  { name: 'WillHazelnut',
    text: 'Fullstack Academy is sexy! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'EthanAlley',
    text: 'Fullstack Academy is awesome! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'JacobCookie',
    text: 'Fullstack Academy is breathtaking! The instructors are just so cool. #fullstacklove #codedreams' },
  { name: 'DaveHazelnut',
    text: 'Fullstack Academy is sexy! The instructors are just so awesome. #fullstacklove #codedreams' },
  { name: 'MadisonAshby',
    text: 'Fullstack Academy is awesome! The instructors are just so sweet. #fullstacklove #codedreams' } 
    ];

var add = function (name, text) {
  data.push({ name: name, text: text });
};

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find };


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// for(var i=0; i<10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

//generate tweets list
//console.log(list());