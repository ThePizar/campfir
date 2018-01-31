import {User} from './User';

export class LoggedInUser extends User {
  public preferences: any;
  
  /**
   * Create a User object for logged in user. Has the full setting of the user.
   *
   * @param id {Number} the id number of the User
   * @param name {String} the name of the User
   * @param playlists {PlayList[]} the playlists created by the user
   * @param followings {Object} the playlists followed by the user
   * @param followings.users {User[]} the users this user follows
   * @param followings.lists {PlayList[]} the playlists this user follows
   * @param preferences {Object} the preferences of the user
   * @param preferences.source {String} the preferred source for the user
   */
  constructor (id, name, playlists, followings, preferences) {
    super(id, name, playlists, followings);
    this.preferences = preferences;
  }
  
  simplify () {
    let user = super.simplify();
    user.preferences = this.preferences;
    return user;
  }
  
  acquirePreferences () {
    //Do query
  }
}