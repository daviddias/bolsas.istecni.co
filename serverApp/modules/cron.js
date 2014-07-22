// RUN EVERY WEEK DAY

var cronJob = require('cron').CronJob;
var fetch = require('./fetch-scholarships');
var save = require('./process-scholarships');
var emailUpdate = require('./mailchimp.js');


var fetchDaily = function(){
  try {
    var job = new cronJob({
      cronTime: '00 30 11 * * 1-5',
      onTick: function() {
          fetch.run(function(err, scholarshipList) {
              if(err) {
                  return console.log(err);
              }
              console.log(scholarshipList);
              save(scholarshipList);
          });
        console.log('FETCH DONE DAILY');
      },
      start: false, // to start after creation
      timeZone: 'Europe/Amsterdam'
    });
    job.start();
  } catch(ex) { console.log('cron pattern not valid'); }
};

// RUN EVERY SUNDAY
var mailWeekly = function(){
  try {
    var job = new cronJob({
      cronTime: '00 30 11 * * 0',
      onTick: function() {
        // Runs every Sunday at 11:30:00 AM.
        emailUpdate();
        console.log('EMAIL UPDATE DONE WEEKLY');
      },
      start: false, // to start after creation
      timeZone: 'Europe/Amsterdam'
    });
    job.start();
  } catch(ex) { console.log('cron pattern not valid'); }
};

module.exports = {
    fetchDaily: fetchDaily,
    mailWeekly: mailWeekly
};
