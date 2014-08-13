var moment = require('moment');
var comments = require('../data/comments');
var donations = require('../data/donations');

module.exports = function(app) {
	app.get('/', function(req, res) {

    // I am modifying this slightly to reflect more likely object structure

    var context = {
			moment: moment,
			donations: donations.find(),
    }

    context.donations[0].comments = comments.find(null, 2);
    context.donations[1].comments = [];

		res.render('index', context);
	});


	// API endpoints
	app.get('/api/donations/:id/comments', function(req, res) {
		res.json({
			comments: comments.find(parseInt(req.query.offset, 10))
		});
	});

	app.post('/api/donations/:id/comments', function(req, res) {
		if (!req.body.text) {
			return res.send(400);
		} else {
			var comment = comments.save(req.body);
			return res.json(comment);
		}
	});
};
