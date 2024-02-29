const express = require("express");
const cors = require("cors");
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const resolvers = require('./db/resolvers');
const typeDefs = require('./db/schema');
const app = express();

const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    app.use('/api', expressMiddleware(server));
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })

}

startServer();



