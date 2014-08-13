var moment = require('moment');

var data = [
	{
		id: 1,
		text: "Gentrify McSweeney's salvia, Bushwick craft beer small batch cardigan Tumblr selfies messenger bag. Austin hashtag Etsy, synth try-hard pop-up PBR&B pour-over. Selfies leggings Austin deep v organic bicycle rights. Keffiyeh cred kogi slow-carb tote bag. Chillwave Brooklyn brunch tattooed, bicycle rights authentic Blue Bottle fap PBR&B PBR hella Pinterest ugh DIY. Narwhal Brooklyn PBR, gentrify Pitchfork keffiyeh banjo fanny pack actually tofu selfies bespoke salvia pop-up.",
		created: '2012-01-22'
	},
	{
		id: 2,
		text: "Brooklyn actually 90's, roof party freegan synth Etsy scenester 3 wolf moon gastropub Marfa literally kale chips. Echo Park banjo High Life fashion axe single-origin coffee.",
		created: '2012-01-23'
	},
	{
		id: 3,
		text: "Meh pop-up mlkshk chillwave, distillery sartorial authentic craft beer iPhone quinoa. Mlkshk plaid occupy, letterpress banjo kale chips literally Williamsburg bicycle rights iPhone mustache fanny pack Shoreditch. Fixie flannel +1 American Apparel. Roof party meh Banksy, tote bag gastropub cray mixtape chambray 8-bit freegan.",
		created: '2012-02-04'
	},
	{
		id: 4,
		text: "Polaroid raw denim plaid cliche. Drinking vinegar selfies kale chips wolf, blog lo-fi narwhal Marfa meh gastropub meggings fap scenester. Squid Neutra McSweeney's roof party polaroid +1 trust fund.",
		created: '2012-03-12'
	},
	{
		id: 5,
		text: "Typewriter trust fund pork belly, chillwave stumptown Neutra cliche hashtag quinoa VHS meh Shoreditch chambray. Keytar typewriter plaid +1 put a bird on it, quinoa cliche locavore banjo irony. Scenester quinoa Godard four loko aesthetic banh mi. Art party tattooed pickled mixtape gluten-free pour-over. YOLO disrupt actually, you probably haven't heard of them Godard squid semiotics fanny pack bicycle rights locavore slow-carb artisan.",
		created: '2012-03-22'
	},
	{
		id: 6,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		created: '2012-03-23'
	},
	{
		id: 7,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		created: '2012-03-23'
	},
	{
		id: 8,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		created: '2012-03-23'
	},
	{
		id: 9,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		created: '2012-03-23'
	},
	{
		id: 10,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		created: '2012-03-23'
	}
];

// Add option to get total number of comments
exports.total = function () {
  return data.length;
}

exports.find = function (offset, limit) {
	limit = limit || data.length;
	offset = offset || 0;

	return data.slice(offset, limit);
};

exports.byId = function (id) {
	var record = null;

	data.forEach(function (r) {
		if (r.id === id) record = r;
	});

	return record;
};

exports.save = function (comment) {
	var id = data[data.length - 1].id;
	comment.id = id + 1;

	data.push(comment);

	comment.created = moment().format('YYYY-MM-DD');

	return comment;
};
