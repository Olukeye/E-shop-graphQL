const {ApolloServer } = require("apollo-server");
const { typeDefs } = require("./type.schema");
const { Query } = require('./resolvers/query');
const { Job } = require('./resolvers/job');
const { Category } = require('./resolvers/category');



const server = new ApolloServer({
typeDefs,
resolvers: {
    Query,
    Job,
    Category
}
});


server.listen().then(({url}) => {
    console.log("server is listening at " + url)
})