// Modifying this slightly to hard code some stuff and
// to reflect a more likely object structure
var comments = require('./comments');

var data = [{
  id: 100,
  donor: 'Matthias Metternich',
  total_likes: 2,
  amount: 20,
  message: 'Go for it Anna, good luck with the read-a-thon!',
  created: '2014-08-14'
}, {
  id: 101,
  donor: 'Alistair Kilpatrick',
  total_likes: 0,
  amount: 100,
  message: 'Looks like a great cause Anna, good luck with your fundraiser!',
  created: '2014-08-10'
}];

exports.find = function (offset, limit) {
	limit = limit || 2;
	offset = offset || 0;

	return data.slice(offset, offset + limit);
};

exports.byId = function (id) {
	var record = null;

	data.forEach(function (r) {
		if (r.id === id) record = r;
	});

	return record;
};
