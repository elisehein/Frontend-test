// Adding a dummy donation for the sake of a nicer demo
var data = [
	{
		id: 100,
    donor: 'Matthias Metternich',
		amount: 1000,
		message: 'Vice Banksy art party sustainable, kitsch tofu try-hard narwhal single-origin coffee seitan Intelligentsia. Letterpress mlkshk Schlitz cardigan, 8-bit VHS shabby chic typewriter pickled distillery.',
    created: '2014-08-01'
	}, {
    id: 101,
    donor: 'Alistair Kilpatrick',
    amount: 100,
    message: 'Looks like a great cause Anna, good luck with your fundraiser!',
    created: '2014-08-02'
  }
];

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
