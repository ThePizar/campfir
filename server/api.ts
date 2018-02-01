import express = require ('express');
let router = express.Router();
import config from './config';
import { PlayList } from './data/PlayList';
import { User } from './data/User';

router.get('/', (req, res) => {
  res.json(config.version);
});

router.get('/version', (req, res) => {
  res.json(config.version);
});

router.get('/playlist/:id', (req, res) => {
  let id = req.params.id;
  PlayList.getPlaylist(id).then(pl => {
    res.json({
      success: true,
      playlist: pl.simplify()
    })
  }).catch(err => {
    console.log(err);
    res.json({
      success: false,
      message: `Could not get playlist of id ${id}`
    })
  });
});

router.get('/user/:userId/playlists', (req, res) => {
  let userId = req.params.userId;
  User.getUser(userId).then(user => {
    res.json({
      success: true,
      playlists: user.simplify().playlists
    })
  }).catch(err => {
    console.log(err);
    res.json({
      success: false,
      message: `Could not get playlists of user ${userId}`
    })
  });
});

export default router;