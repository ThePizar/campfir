
class BasicUser {

  /**
   * Create a User with just the basic information. Good to be used in potentially recursive situations.
   *
   * @param id {Number} the id number of the User
   * @param name {String} the name of the User
   */
  constructor (id, name) {
    this._id = id;
    this._name = name || "";
  }
  
  /**
   * Returns a pure object of the BasicUser
   *
   * @returns {{id: Number, name: String}}
   */
  simplify () {
    return {
      id: this.id,
      name: this.name
    }
  }
  
  /**
   * The unique id number of the user
   *
   * @returns {Number}
   */
  get id () {
    return this._id;
  }
  
  /**
   * The name of the user
   *
   * @returns {String}
   */
  get name () {
    return this._name;
  }
  
  acquireName () {
    //Do query
  }
  
  static getBy(id) {
    //TODO: Get BasicUser by id
  }
}

module.exports = BasicUser;