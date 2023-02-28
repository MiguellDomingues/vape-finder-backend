var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema  = require('./schema.js')
const { root }  = require('./resolvers.js')

var app = express();
var cors = require('cors');
app.use( cors() );          // allow react app communicate with server on same machine/diff port

const v1 = {
  url: '/graphql',
  config: graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
}

const {url, config} = v1

app.use(url, config);
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});
