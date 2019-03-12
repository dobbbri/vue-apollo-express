import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers.js'
import typeDefs from './types.gql'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: {
    maxFileSize: 1000000, // 1 MB
    maxFiles: 5
  }
})

server.listen({ port: 3001 }, () =>
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`)
);
