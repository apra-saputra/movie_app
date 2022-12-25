const { typeDefs } = require("./schema/api");
const { resolvers } = require("./schema/apiResolver");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4004 },
})
  .then((res) => {
    console.log(`🚀 Server ready at: ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });
