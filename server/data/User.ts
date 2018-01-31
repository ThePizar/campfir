import { BasicUser } from "./BasicUser"
import { PlayList } from './PlayList';

export interface Followings {
  users: BasicUser[];
  lists: PlayList[];
}

//TODO: do acquire queries
export class User extends BasicUser {
  public playlists: PlayList[];
  public followings: any;
  
  constructor (id: Number, name: String, playlists: PlayList[], followings: Followings) {
    super(id, name);
    this.playlists = playlists || [];
    this.followings = followings;
  }
  
  /**
   * The basic form of this user
   *
   * @returns {BasicUser}
   */
  get basic () {
    return super.simplify();
  }
  
  /**
   * Returns a pure Object of a User
   *
   * @returns {User}
   */
  simplify () {
    return this;
  }
  
  acquireFollowings () {
    //Do query
  }
  
  /**
   * Get the playlists of the given user
   *
   * @param userId {Number}
   * @returns {Promise.<User>}
   */
  static getUser(userId) {
    let list = [];
    list.push(PlayList.getPlaylist(1));
    list.push(PlayList.getPlaylist(2));
    return Promise.all(list).then(playLists => {
      return new User(userId, 'Joshua Michel', playLists, {users:[], lists:[]});
    })
  }
}
