const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");
const TrackAPI = require("./resolvers.js");
const PORT = process.env.PORT ?? 4000;
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { PORT },
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`Apollo Server running. Query at ${url}`);
}

startApolloServer();
