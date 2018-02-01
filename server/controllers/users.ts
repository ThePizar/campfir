import {User} from '../data/User'
import {BasicUser} from '../data/BasicUser'
import {LoggedInUser} from '../data/LoggedInUser'
import {PlayList} from "../data/PlayList";

/**
 *
 */
export function getUserPlayLists (req, res) {
  let userId = req.params.userId;
  
  User.getUser(userId).then(user => {
    return user.playlists.map(list => list.simplify());
  }).then(lists => {
    res.json({
      success: true,
      playlists: lists
    })
  }).catch(err => {
    console.log(err);
    res.json({
      success: false,
      message: `Could not get playlists of user ${userId}`
    })
  });
}