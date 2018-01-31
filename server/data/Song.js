"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    /**
     * A song with knowledge of where to find it (Spotify, YouTube, etc.)
     *
     * @param {Number} id
     * @param {String} name
     * @param {String} artist
     * @param {External} external
     */
    constructor(id, name, artist, external) {
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
    simplify() {
        return this;
    }
}
exports.Song = Song;
//# sourceMappingURL=Song.js.map