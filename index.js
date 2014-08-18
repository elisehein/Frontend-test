var express = require('express');
var app = express();

app.configure(function() {
	app.engine('.html', require('ejs').__express);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

	app.use(express.compress());
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
});

require('./routes')(app);

app.listen(3000);
console.log('Listening on port 3000');
