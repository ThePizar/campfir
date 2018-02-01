import {PlayList} from "../data/PlayList"
import {Song} from "../data/Song"
import {AddedSong} from "../data/AddedSong"

export function getPlaylist (req, res) {
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
}