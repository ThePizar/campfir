const BasicUser = require('./BasicUser');

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
    this._followings = followings || [];
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
}

module.exports = User;
