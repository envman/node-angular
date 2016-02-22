var express = require('express');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(request, response) {

});

app.use(express.static('public'));

app.listen(8080);
