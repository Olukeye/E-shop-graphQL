const {ApolloServer, gql } = require("apollo-server");


// categories
const categories = [
    {
        id:"9h3n6gf-987l-6547-665756656vt89023h4",
        name:"Gadgets",
    },
    {
        id:"20ate6j-987l-6fa7-gf56h4551vt89023h4",
        name:"games",
    },
    {
        id:"t564083-er7l-8098-k7475665n40126723h",
        name:"beauti",
    },
]
// products
const products = [
    {
        id:"646gfgf-t65i-7bv7-665756656vt29hf48",
        name:"seun olukeie",
        description:"Wifi",
        quantity: 1,
        image:"img-1",
        price:21.767,
        onSale:false
    },
    {
        id:"646gfgf-t65i-7bv7-665756656vt656fv7",
        name:"stanlei",
        description:"Xbox",
        quantity: 1,
        image:"img-2",
        price:646.767,
        onSale:false
    },
    {
        id:"646gfgf-t65i-7bv7-6657-56656vt09gd84",
        name:"victor",
        description:"ps 1",
        quantity: 1,
        image:"img-3",
        price:646.767,
        onSale:false
    },
    {
        id:"6473gh5-t65i-7bv7-6657-56656vt29hf43",
        name:"Rose-marri",
        description:"make up kit",
        quantity: 5,
        image:"img-4",
        price:646.767,
        onSale:false
    },
    {
        id:"646gfgf-t65i-7bv7-66575hd65kt29hf42",
        name:"Zidane",
        description:"hp pc",
        quantity: 1,
        image:"img-5",
        price:646.767,
        onSale:false
    },
]
const typeDefs = gql `
   type Query{
       hello: String,
       products:[Product!]!         ##get all products
       product(id:ID!):Product     ##getting a single product bi its id
       categories:[Category!]!      ##
       category(id:ID!):Category
   }

   type Product {
       id:ID!
    name: String!
    description:String!
    quantity:Int!
    image:String!
    price:Float!
    onSale:Boolean!
},

type Category {
    id: ID!
    name:String!
}

`;
const resolvers = {
    Query: {
        hello: () => {
            return "Hello GraghQL" 
        },
        // get all products
        products: (parant, args, context)=> {
            return products
        },
        // get single product
        product: (parant, args, context)=> {
            const {id} = args;
            // find product from [ products ] where productID matches searched product
            return product =  products.find( (product) => product.id === id);
        },
        // List Categories
        categories: (parant, args, context) => categories,
        category:(parant, args, context) => {
            const {id} = args;
            return category = categories.find((category) => category.id === id)
        }
    }
}
const server = new ApolloServer({
typeDefs,
resolvers
});



server.listen().then(({url}) => {
    console.log("server is listening at " + url)
})