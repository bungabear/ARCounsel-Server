const {GraphQLServer} = require('graphql-yoga')
const PORT = process.env.PORT || 8080;

const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hi"
    }
} 

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({port:PORT}, ()=>{
    console.log('server start ' + PORT)
})