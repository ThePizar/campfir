let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let compression = require('compression');
let router = require('./api');
const cors = require('cors');

app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requestedw-With, Content-Type, Accept");
  next();
});

app.use('/api', router);

app.get('/', function (req, res) {
  res.send('Hello World')
});

module.exports = app;