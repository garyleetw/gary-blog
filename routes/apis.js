var express = require('express');
var router = express.Router();

/* RESP APIs */
router.post( '/2/post', function(req, res, next) {
	var person;
	
	person = {
		'name': 'Gary',
		'e-mail': 'gary.lee.tw@gmail.com'
	};

	res.json(person);
});

router.get( '/2/post/:id', function(req, res, next) {
	id = req.params.id
	
	res.end();
});

module.exports = router;