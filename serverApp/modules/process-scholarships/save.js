var Scholarship = require('./../../db/models/scholarship.js');

var save = module.exports = function(scholarshipList) {

  scholarshipList.forEach( function (rawScholarship) {
    // 1. Calculate the ID
    


    // 2. See if exists
    Scholarship.findByScholarshipId(id, function (err, scholarship){

    });
  });



  // for each scholarship, check if exits, if so, skip, if not, add new one

}