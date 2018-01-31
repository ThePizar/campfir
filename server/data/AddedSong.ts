import {Song, External} from "./Song"

export class AddedSong extends Song {
  public timestamp: Number;
  /**
   * A song with knowledge of where to find it (Spotify, YouTube, etc.) and when it was added to a playlist
   *
   * @param id {Number} unique id for the song
   * @param name {String}
   * @param artist {String}
   * @param external {External}
   * @param timestamp {Number} Unix time that the song was added to a playlist
   */
  constructor (id: Number, name: String, artist: String, external: External, timestamp: Number) {
    super(id, name, artist, external);
    this.timestamp = timestamp;
  }
  
  /**
   *
   * @returns {{id: Number, name: String, artist: String, external: {spotify: Object, youtube: Object}, timestamp: Number}}
   */
  simplify () {
    return this;
  }
}
