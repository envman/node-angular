var express = require('express');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('test');
});

app.use(express.static('public'));

app.listen(8080);
