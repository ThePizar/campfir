"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddedSong_1 = require("./AddedSong");
const BasicUser_1 = require("./BasicUser");
const source = require("./source");
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
    constructor(id, hash, name, songs, user) {
        this.id = id;
        this.hash = hash;
        this.name = name;
        this.songs = songs;
        this.user = user;
    }
    /**
     *
     * @returns {{id: Number, hash: Number, name: String, songs: {id: Number, name: String, artist: String, external: {spotify: Object, youtube: Object}, timestamp: Number}[], user: {id: Number, name: String}}}
     */
    simplify() {
        return this;
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
                return new AddedSong_1.AddedSong(song.id, song.name, song.artist, song.external, song.timestamp);
            });
            let user = new BasicUser_1.BasicUser(pl.user.id, pl.user.name);
            return new PlayList(playListId, pl.hash, pl.name, songs, user);
        });
    }
}
exports.PlayList = PlayList;
//# sourceMappingURL=PlayList.js.map