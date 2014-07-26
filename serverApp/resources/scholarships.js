var Scholarship = require('./../db/models/scholarship.js');

module.exports = function (request, reply) {
  // Se if Query String has something, if not, send all the scholarships
  Scholarship.findAll(function (err, scholarships){
    reply(scholarships);
  });

  // TODO implement the options using queryString
}
