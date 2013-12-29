var Hapi      = require('hapi');
// var scheduler = require('./modules/cron.js');
// var fetch     = require('./modules/fetch.js');
var logger    = require('./modules/logger.js');
require('./db');

var server    = module.exports = new Hapi.Server(process.env.PORT || 8080);
require('./routes');

server.start(function () {
  logger.info('Server started at ' + server.info.uri);
});


// Start the scheduler
// scheduler.fetchDaily();
// scheduler.mailWeekly();
// fetch.run();
// fetch.cleanInactive();