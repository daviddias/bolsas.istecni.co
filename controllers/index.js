var store = require('./../store/accessDB.js');
var inspect = require('util').inspect;

var indexHandler = function (request) {
  store.getAllScholarships(function (allDocs){
    // console.log(allDocs);
    var all = allDocs;
    request.reply.view('index.html',
      { scholarships: allDocs});
  });
};

module.exports = indexHandler;