/**
 * getting started with GQL
 */
var { graphql, buildSchema } = require('graphql');

/**
 * Schema query type
 */
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// provide a resolver function for each API standpoint
var rootValue = {
    hello() {
        return "Hello World"
    }
}

// run the gql query { hello } and print out the result
graphql({
    schema,
    source: "{ hello }",
    rootValue
}).then(res => {
    console.log(res);
})