var Scholarship     = require('./../../db/models/scholarship.js');
var scholarshipuuid = require('./../scholarshipuuid.js');
var logger          = require('./../logger.js');

var save = module.exports = function(scholarshipList) {

  scholarshipList.forEach(function (rawScholarship) {
    var id = scholarshipuuid(rawScholarship.scholarshipId, rawScholarship.releaseDate);

    Scholarship.findByScholarshipId(id, function (err, scholarship){
      if (err) {
        logger.error(err);
      }  

      if (!scholarship[0]) { // new scholarship
        var newScholarship = new Scholarship();

        newScholarship.id             = id;
        newScholarship.slots          = rawScholarship.slots;
        newScholarship.type           = rawScholarship.type;
        newScholarship.holder         = rawScholarship.holder;
        newScholarship.link           = rawScholarship.link;
        newScholarship.scholarshipId  = rawScholarship.scholarshipId;
        newScholarship.field          = rawScholarship.field;
        newScholarship.releaseDate    = rawScholarship.releaseDate
        newScholarship.closeDate      = rawScholarship.closeDate;
        newScholarship.active         = rawScholarship.active

        newScholarship.save();
      } 
    });
  });
}