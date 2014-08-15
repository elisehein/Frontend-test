var moment = require('moment');
var comments = require('../data/comments');
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
    // Add option to specify limit (to only get 2 comments at first)
    var response = {
      comments: [],
      meta: { total: 0 }
    }

    // Only return comments for donation id 101,
    // because that's the only thing the API provides
    if (req.params.id == 100) {
      response.comments = comments.find(parseInt(req.query.offset, 10),
                                        parseInt(req.query.limit, 10));
      response.meta.total = comments.total();
    }

		res.json(response);
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
