var Scholarship     = require('./../db/models/scholarship.js');
var scholarshipuuid = require('./scholarshipuuid.js');
var logger          = require('./logger.js');

module.exports = function() {

    Scholarship.update({ closeDate: { $lt: new Date() } }, { active: false }, function(err) {
        if(err) {
            logger.error(err);
        }
    });
};

