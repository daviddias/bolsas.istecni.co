var Hapi      = require('hapi');
var scheduler = require('./modules/cron.js');
require('./db')();
var fetch     = require('./modules/fetch-scholarships');
var save      = require('./modules/process-scholarships');
var logger    = require('./modules/logger.js');
var config    = require('./config.js')
var markInactive = require('./modules/markInactive.js');

var server    = module.exports = new Hapi.Server(process.env.PORT || 8080);
require('./routes');

server.pack.register({
    plugin: require('moonboots_hapi'),
    options: config
}, function(err) {
    if(err)
        throw err;

    server.start(function(err) {
        if(err)
            throw err;

        logger.info("Server started at: " + server.info.uri);
    });

});

// Start the scheduler
scheduler.fetchDaily();
scheduler.mailWeekly();

// Testing

fetch.run(function(err, scholarshipList){
    if(err) {
        return console.log(err);
    }
    console.log(scholarshipList);
    save(scholarshipList);
    markInactive();
});
