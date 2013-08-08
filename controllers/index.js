var store = require('./../store/accessDB.js');
var inspect = require('util').inspect;

var indexHandler = function (request) {
  store.getAllScholarships(function (allDocs){
    var all = allDocs;
    request.reply.view('template.html',
      { scholarships: allDocs});
  });
};

module.exports = indexHandler;