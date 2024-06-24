import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { middlewares } from "./middlewares/middlewares.js";
import  mongodbConnect  from './config/MongodbConfig.js';

dotenv.config();
const PORT = process.env.PORT || 9090;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    {
      async requestDidStart(requestContext) {
        await middlewares(requestContext);
      }
    }
  ]
});

const serverListen = async () => {
  await startStandaloneServer(server, {
    listen: {
      port: PORT,
    },
  });
  await mongodbConnect()
  console.log(`server is running on ${PORT}`.bgCyan.black);
};
serverListen();
