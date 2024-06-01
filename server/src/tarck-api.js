const { RESTDataSource } = require("@apollo/datasource-rest");
class TrackAPI extends RESTDataSource {
  cache;
  constructor({ cache }) {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    this.cache = cache;
  }
  getTracksForHome() {
    return this.get("tracks");
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

module.exports = TrackAPI;
