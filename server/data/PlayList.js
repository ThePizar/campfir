
class PlayList {
  /**
   * A playlist of Songs belonging to a particular User
   *
   * @param id {Number}
   * @param hash {String}
   * @param songs {AddedSong[]}
   * @param user {BasicUser}
   */
  constructor (id, hash, songs, user) {
    this._id = id;
    this._hash = hash;
    this._songs = songs;
    this._user = user;
  }
  
  simplify () {
    let songs = this.songs; //TODO: Run simplify across songs
    return {
      id: this.id,
      hash: this.hash,
      songs: songs,
      user: this.user.simplify()
    }
  }
  
  /**
   * The unique id of the playlist
   *
   * @returns {Number}
   */
  get id () {
    return this._id;
  }
  
  /**
   * The unique hash of the playlist
   *
   * @returns {Number}
   */
  get hash () {
    return this._hash;
  }
  
  /**
   *
   * @returns {AddedSong[]|*}
   */
  get songs () {
    return this._songs;
  }
  
  get user () {
    return this._user;
  }
}

module.exports = PlayList;