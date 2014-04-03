var moment = require('moment');
var comments = require('../data/comments');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			moment: moment,
			comments: comments.find()
		});
	});


	// API endpoints
	app.get('/api/comments', function(req, res) {
		res.json({
			comments: comments.find(parseInt(req.query.offset, 10))
		});
	});

	app.post('/api/comments', function(req, res) {
		var comment = comments.save(req.body);
		res.json(comment);
	});
};
