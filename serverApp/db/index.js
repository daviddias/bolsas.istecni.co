var mongoose = require('mongoose');
var logger   = require('./../modules/logger.js');
var mongo_url;

mongo_url = process.env.MONGOURL || 'mongodb://localhost/bolsas_dev';

require('./models/scholarship');

module.exports = function() {
  logger.info("Connecting to MongoDB on: " + mongo_url);
  mongoose.connect(mongo_url);
  var db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (){
    logger.info('Successfuly connected to mongoDB');
  });
};