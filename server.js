const {ApolloServer } = require("apollo-server");
const { typeDefs } = require("./type.schema");
const { Query } = require('./resolvers/query');
const { Job } = require('./resolvers/job');
const { Mutation } = require('./resolvers/mutation');
const { Category } = require('./resolvers/category');
const {categories, jobs} = require('./db');


const server = new ApolloServer({
typeDefs,
resolvers: {
    Query,
    Mutation,
    Job,
    Category
},
context: {
    categories,
    jobs
}
});


server.listen().then(({url}) => {
    console.log("server is listening at " + url)
})