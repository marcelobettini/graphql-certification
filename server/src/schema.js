const gql = require("graphql-tag");
const typeDefs = gql`
  type Query {
    # Get tracks array for Homepage
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }
  "A track is a group of modules that teaches about certain topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  # Author of a complete Track
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
  }
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }
`;
module.exports = typeDefs;
