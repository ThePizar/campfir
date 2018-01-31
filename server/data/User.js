"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicUser_1 = require("./BasicUser");
const PlayList_1 = require("./PlayList");
//TODO: do acquire queries
class User extends BasicUser_1.BasicUser {
    constructor(id, name, playlists, followings) {
        super(id, name);
        this.playlists = playlists || [];
        this.followings = followings;
    }
    /**
     * The basic form of this user
     *
     * @returns {BasicUser}
     */
    get basic() {
        return super.simplify();
    }
    /**
     * Returns a pure Object of a User
     *
     * @returns {User}
     */
    simplify() {
        return this;
    }
    acquireFollowings() {
        //Do query
    }
    /**
     * Get the playlists of the given user
     *
     * @param userId {Number}
     * @returns {Promise.<User>}
     */
    static getUser(userId) {
        let list = [];
        list.push(PlayList_1.PlayList.getPlaylist(1));
        list.push(PlayList_1.PlayList.getPlaylist(2));
        return Promise.all(list).then(playLists => {
            return new User(userId, 'Joshua Michel', playLists, { users: [], lists: [] });
        });
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map