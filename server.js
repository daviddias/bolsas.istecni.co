var Hapi = require('hapi')
  , options = require('./options.js')
  , fetch = require('./controllers/fetch')
  , indexRoute = require('./routes/index.js')
  , expiredRoute = require('./routes/expired.js')
  , staticAssets = require('./routes/staticAssets.js')

fetch.run();

var server = new Hapi.Server(8080, options);

// Add the routes
server.route([ indexRoute
             , expiredRoute
             , staticAssets
]);

// Error logging 
server.on('log', function (event, tags) {
    if (tags.error) { console.log(event); }
    if (tags.routes) {  console.log(event); }
});
// How to log (array of tags plus name of event)
// server.log(['test', 'error'], 'Test event');

// Start the server
server.start(function () {
  console.log("Server started at " + server.info.uri);
});

