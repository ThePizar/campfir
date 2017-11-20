
class Song {
  /**
   * A song with knowledge of where to find it (Spotify, YouTube, etc.)
   *
   * @param id {Number} unique id for the song
   * @param name {String}
   * @param artist {String}
   * @param external {Object}
   * @param external.spotify {Object}
   * @param external.youtube {Object}
   */
  constructor (id, name, artist, external) {
    this._id = id;
    this._name = name;
    this._artist = artist;
    this._external = external;
  }
  
  simplify () {
    return {
      id: this._id,
      name: this._name,
      artist: this._artist,
      external: this._external
    }
  }
}

module.exports = Song;