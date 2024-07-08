/**
 * generally all it needs is to specify the types using gql schema language
 * (buildschema argument)
 * 
 * supports scalar type of String Int Float Boolean Id directly in the buildSchema schema
 * 
 * every type is nullable by default, valid to return null for any of the scalar types
 * adding ! signifies that it is not nullable
 * 
 * use square brackets for list types
 * 
 * the types map straightforwardly to JS, so you can return plain JS objects in 
 * the api that return these types
 */

var { buildSchema } = require('graphql');
var { createHandler } = require('graphql-http/lib/use/express');
var { ruruHTML } = require('ruru/server');
var express = require('express');

/**
 * Schema query type
 */
var schema = buildSchema(`
    type Query {
        quoteOfTheDay: String
        random: Float!
        rollThreeDice: [Int]
        hello: String
    }
`);

// provide a resolver function for each API standpoint
var rootValue = {
    quoteOfTheDay() {
        return Math.random() < 0.5 ? "easy game" : "cringe"
    },
    random() { return Math.random() },
    rollThreeDice() {
        return [1,2,3].map(_ => 1+ Math.floor(Math.random() * 6));
    },
    hello() {
        return "Hello World"
    }
}

var app = express();

// create and use the gql handler
app.all(
    '/graphql',
    createHandler({
        schema,
        source: "{ hello }",
        rootValue
    })
);

app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })


// start server at 400listen(4000);
// console.log("running server at http://localhost:4000/graphql");
app.listen(4000);
console.log("running server at http://localhost:4000/graphql");

