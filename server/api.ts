import express = require ('express');
let router = express.Router();
import config from './config';
import { PlayList } from './data/PlayList';
import * as users from './controllers/users'
import * as playlists from './controllers/playlists'

router.get('/', (req, res) => {
  res.json(config.version);
});

router.get('/version', (req, res) => {
  res.json(config.version);
});

router.get('/playlist/:id', playlists.getPlaylist);

router.get('/user/:userId/playlists', users.getUserPlayLists);

export default router;