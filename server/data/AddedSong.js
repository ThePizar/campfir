const Song = require('./Song');

class AddedSong extends Song {
  /**
   * A song with knowledge of where to find it (Spotify, YouTube, etc.) and when it was added to a playlist
   *
   * @param id {Number} unique id for the song
   * @param name {String}
   * @param artist {String}
   * @param external {Object}
   * @param external.spotify {Object}
   * @param external.youtube {Object}
   * @param timestamp {Number} Unix time that the song was added to a playlist
   */
  constructor (id, name, artist, external, timestamp) {
    super(id, name, artist, external);
    this._timestamp = timestamp;
  }
  
  simplify () {
    let song = super.simplify();
    song.timestamp = this._timestamp;
    return song;
  }
}

module.exports = AddedSong;