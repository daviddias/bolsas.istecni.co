var Hapi = require('hapi');
var indexRoute = require('./../routes/index.js');


var options = {
  views: {
    path: __dirname + '/../templates',
    engines: {
      html: 'handlebars'
    }
  }
};

var server = new Hapi.Server(8080, options);

// Add the route
server.route({
    method: 'GET',
    path: '/',
    config: indexRoute
});

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