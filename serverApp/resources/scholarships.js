var Scholarship = require('./../db/models/scholarship.js');

module.exports = function (request) {
  // Se if Query String has something, if not, send all the scholarships
  Scholarship.findAll(function (err, scholarships){
    request.reply(scholarships);
  });

  // TODO implement the options using queryString
}