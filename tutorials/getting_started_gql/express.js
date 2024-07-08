/**
 * running gql with express
 * modify this that its an API server rather than a script that runs a single query
 * 
 * we use graphql-http to mount a gql api server onto /graphql http endpoint
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
        hello: String
    }
`);

// provide a resolver function for each API standpoint
var rootValue = {
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

app.get('/', (req, res) => {
	res.type("html");
	res.end(ruruHtml({ endpoint: '/graphql' }));
});

// start server at 400listen(4000);
// console.log("running server at http://localhost:4000/graphql");
app.listen(4000);
console.log("running server at http://localhost:4000/graphql");

// now the express server is serving a gql, there are many ways to retrieve data from it 
// one way of viewing data through express is to use ruru
// this file will now add ruru into the express server
