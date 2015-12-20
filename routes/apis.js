var express = require('express');
var router = express.Router();

var db =[];

/* RESP APIs */
router.post( '/1/post', function(req, res, next) {
	var title = req.query.title;
	var message = req.query.message;

    //Use object
	var article = {
		title:title,
		message:message
	};

	db.push(article);
	
	res.json({
		status: "OK"
		});
});

router.get( '/1/post/', function(req, res, next) {
	res.json(db);
});

module.exports = router;