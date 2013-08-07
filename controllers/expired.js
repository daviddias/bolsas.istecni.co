var store = require('./../store/accessDB.js');

var expiredHandler = function (request) {
  store.getAllInactiveScholarships(function (allDocs){
    var all = allDocs;
    request.reply.view('index.html',
      { scholarships: allDocs});
  });
};

module.exports = expiredHandler;
