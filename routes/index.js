var moment = require('moment');
var donations = require('../data/donations');

module.exports = function(app) {
	app.get('/', function(req, res) {

    var context = {
			moment: moment,
			donations: donations.find(),
    }

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
