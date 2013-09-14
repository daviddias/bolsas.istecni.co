var store = require('./../store/accessDB.js');

var indexHandler = function (request) {
  store.getAllScholarships(function (allDocs){
    request.reply.view('template.html',
      { scholarships: allDocs});
  });
};

module.exports = indexHandler;