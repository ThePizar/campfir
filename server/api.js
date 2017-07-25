let express = require('express');
let router = express.Router();
let config = require('./config');

router.get('/', (req, res) => {
  res.json(config.version);
});

module.exports = router;