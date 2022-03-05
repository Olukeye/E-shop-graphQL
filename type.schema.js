const { gql } = require("apollo-server");


exports.typeDefs = gql `
type Query{
    hello: String,
    jobs:[Job!]!         ##get all jobs
    job(id:ID!):Job    ##getting a single job by its id
    categories:[Category!]!      ##get all categories
    category(id:ID!):Category    ## get a single category by id
}

type Job {
     id:ID!
     title:String!
     company:String!
     description:String!
     role:String!
     amount:Int!
     location:String!
     category:Category!
},
type Category {
 id: ID!
 name:String!
 jobs:[Job!]!
}

`;