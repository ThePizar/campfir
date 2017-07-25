let express = require('express');
let app = express();
let router = require('./api');

app.use('/api', router);

app.get('/', function (req, res) {
  res.send('Hello World')
});

module.exports = app;