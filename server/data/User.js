const BasicUser = require('./BasicUser');
const PlayList = require('./PlayList');

//TODO: do acquire queries
class User extends BasicUser {
  /**
   * Create a User object
   *
   * @param id {Number} the id number of the User
   * @param name {String} the name of the User
   * @param playlists {PlayList[]} the playlists created by the user
   * @param followings {Object} the playlists followed by the user
   * @param followings.users {BasicUser[]} the users this user follows
   * @param followings.lists {PlayList[]} the playlists this user follows
   */
  constructor (id, name, playlists, followings) {
    super(id, name);
    this._playlists = playlists || [];
    this._followings = followings || {};
    if(!this._followings.users) this._followings.users = [];
    if(!this._followings.lists) this._followings.lists = [];
  }
  
  /**
   * The basic form of this user
   *
   * @returns {{id: Number, name: String}}
   */
  get basic () {
    return super.simplify();
  }
  
  /**
   * Returns a pure Object of a User
   *
   * @returns {{id: Number, name: String}}
   */
  simplify () {
    let basic = this.basic;
    basic.playLists = this.playlists.map(list => {
      return list.simplify();
    });
    let followings = {};
    followings.users = this.followings.users.map(basic => {
      return basic.simplify();
    });
    followings.lists = this.followings.lists.map(list => {
      return list.simplify();
    });
    basic.followings = followings;
    return basic;
  }
  
  /**
   * The play lists of the user
   *
   * @returns {PlayList[]}
   */
  get playlists () {
    return this._playlists;
  }
  
  acquirePlaylists () {
    //Do query
  }
  
  /**
   * The things the user follows
   *
   * @returns {{users: BasicUser[], lists: PlayList[]}}
   */
  get followings () {
    return this._followings;
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
      return new User(userId, 'Joshua Michel', playLists, []);
    })
  }
}

module.exports = User;
