"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Song_1 = require("./Song");
class AddedSong extends Song_1.Song {
    /**
     * A song with knowledge of where to find it (Spotify, YouTube, etc.) and when it was added to a playlist
     *
     * @param id {Number} unique id for the song
     * @param name {String}
     * @param artist {String}
     * @param external {External}
     * @param timestamp {Number} Unix time that the song was added to a playlist
     */
    constructor(id, name, artist, external, timestamp) {
        super(id, name, artist, external);
        this.timestamp = timestamp;
    }
    /**
     *
     * @returns {{id: Number, name: String, artist: String, external: {spotify: Object, youtube: Object}, timestamp: Number}}
     */
    simplify() {
        return this;
    }
}
exports.AddedSong = AddedSong;
//# sourceMappingURL=AddedSong.js.map