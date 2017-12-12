const AddedSong = require('./AddedSong');
const BasicUser = require('./BasicUser');
const source = require('./source');

class PlayList {
  /**
   * A playlist of Songs belonging to a particular User
   *
   * @param id {Number}
   * @param hash {String}
   * @param name {String}
   * @param songs {AddedSong[]}
   * @param user {BasicUser}
   */
  constructor (id, hash, name, songs, user) {
    this._id = id;
    this._hash = hash;
    this._name = name;
    this._songs = songs;
    this._user = user;
  }
  
  /**
   *
   * @returns {{id: Number, hash: Number, name: String, songs: {id: Number, name: String, artist: String, external: {spotify: Object, youtube: Object}, timestamp: Number}[], user: {id: Number, name: String}}}
   */
  simplify () {
    let songs = this.songs.map(song => {
      return song.simplify();
    });
    return {
      id: this.id,
      hash: this.hash,
      name: this.name,
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
   * The name of the playlist
   *
   * @returns {String}
   */
  get name () {
    return this._name;
  }
  
  /**
   *
   * @returns {AddedSong[]}
   */
  get songs () {
    return this._songs;
  }
  
  /**
   *
   * @returns {BasicUser}
   */
  get user () {
    return this._user;
  }
  
  /**
   * Gets the specific playlist
   *
   * @param playListId {Number}
   * @returns {Promise.<PlayList>}
   */
  static getPlaylist(playListId) {
    return source.playLists.getPlaylist(playListId).then(pl => {
      let songs = pl.songs.map(song => {
        return new AddedSong(song.id, song.name, song.artist, song.external, song.timestamp);
      });
      let user = new BasicUser(pl.user.id, pl.user.name);
      return new PlayList(playListId, pl.hash, pl.name, songs, user);
    });
  }
}

module.exports = PlayList;