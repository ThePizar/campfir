
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
  
  /**
   * A pure Object of this song
   *
   * @returns {{id: Number, name: String, artist: String, external: {spotify: Object, youtube: Object}}}
   */
  simplify () {
    return {
      id: this.id,
      name: this.name,
      artist: this.artist,
      external: this.external
    }
  }
  
  /**
   *
   * @returns {Number}
   */
  get id () {
    return this._id;
  }
  
  /**
   *
   * @returns {String}
   */
  get name () {
    return this._name;
  }
  
  /**
   *
   * @returns {String}
   */
  get artist () {
    return this._artist;
  }
  
  /**
   *
   * @returns {{spotify: Object, youtube: Object}}
   */
  get external () {
    return this._external;
  }
}

module.exports = Song;