let express = require('express');
let router = express.Router();
let config = require('./config');
let PlayList = require('./data/PlayList');

router.get('/', (req, res) => {
  res.json(config.version);
});

router.get('/playlist/:id', (req, res) => {
  let id = req.params.id;
  PlayList.getPlaylist(id).then(pl => {
    res.json({
      success: true,
      playlist: pl.simplify()
    })
  }, err => {
    console.log(err);
    res.json({
      success: false,
      message: `Could not get playlist of id ${id}`
    })
  });
});

module.exports = router;