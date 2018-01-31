
export interface External {
  spotify: any;
  youtube: any;
}

export class Song {
  public id: Number;
  public name: String;
  public artist: String;
  public external: External;
  
  /**
   * A song with knowledge of where to find it (Spotify, YouTube, etc.)
   *
   * @param {Number} id
   * @param {String} name
   * @param {String} artist
   * @param {External} external
   */
  constructor (id: Number, name: String, artist: String, external: External) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.external = external;
  }
  
  /**
   * A pure Object of this song
   *
   * @returns {Song}
   */
  simplify () {
    return this;
  }
}