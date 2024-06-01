const gql = require("graphql-tag");
const typeDefs = gql`
  type Query {
    # Get tracks array for Homepage
    tracksForHome: [Track!]!
  }
  "A track is a group of modules that teaches about certain topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  # Author of a complete Track
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
module.exports = typeDefs;
