var express = require('express');
var router = express.Router();
// var app = require('express')();
// var http = require('http').Server(app);
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

module.exports = router;
