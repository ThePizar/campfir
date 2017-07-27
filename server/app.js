let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let compression = require('compression');
let router = require('./api');

app.use(bodyParser.json({strict: false}));

app.use('/api', router);

app.get('/', function (req, res) {
  res.send('Hello World')
});

module.exports = app;