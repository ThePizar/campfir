import express = require ('express');
let app = express();
import bodyParser = require ('body-parser');
import compression = require ('compression');
import cors = require ('cors');
import router from './api';

app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router);

app.get('/', function (req, res) {
  res.send('Hello World')
});

export {app as App};