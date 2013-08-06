var Hapi = require('hapi')
  , options = require('./options.js')
  , indexRoute = require('./routes/index.js')
  , expiredRoute = require('./routes/expired.js')
  , staticAssets = require('./routes/staticAssets.js')
  , scheduler = require('./controllers/cron.js')
  , fetch = require('./controllers/fetch.js')

var server = new Hapi.Server(8090, options);


// Add the routes
server.route([ staticAssets 
             , indexRoute
             , expiredRoute         
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


// Start the scheduler
scheduler.fetchDaily()
scheduler.mailWeekly()
fetch.run()
