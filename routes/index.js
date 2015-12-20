var express = require('express');
var router = express.Router();
var compression = require('compression');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  var pwd = req.query.pass;
  if (pwd ==='123456')
  	res.render('about', {password: pwd});
  else
  	res.status(404).end();
});

router.use('/about', compression());

router.get('/about', function(req, res, next) {
	res.render('/about');
}); 

module.exports = router;
