var dummyData = require('./../data/dummyData');


var getRecordByID = function (id) {
  var recordToReturn;
  dummyData["scholarships"].forEach( function (record) {
    if(record["id"] === id ){
      recordToReturn = record;
    }
  });
  return recordToReturn;
};

var getAllRecords = function() {
  return dummyData["scholarships"];
};


module.exports = {
  getRecordByID : getRecordByID,
  getAllRecords : getAllRecords
};



