var mongoose = require('mongoose');
var ScholarshipModel = require('./models/Scholarship');


// Connect to DB
mongoose.connect('mongodb://localhost/scholarshipsIST');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connected Successfully to DB");
});


/*
var dummyData = {
  scholarships :
  [
    {
      "id" : "BL101", //Edital
      "slots" : 2,
      "type" : "introToResearch",
      "holder" : "Prof. John",
      "field" : "Computer Science",
      "releaseDate" : "12-02-13",
      "closeDate" : "17-02-13",
      "link" : "http://example.com"
    },
    {
      "id" : "BL102", //Edital
      "slots" : 2,
      "type" : "introToResearch",
      "holder" : "Prof. Mario",
      "field" : "Computer Science",
      "releaseDate" : "12-02-13",
      "closeDate" : "17-02-13",
      "link" : "http://example.com"
    },
    {
      "id" : "BL103", //Edital
      "slots" : 1,
      "type" : "introToResearch",
      "holder" : "Prof. Maria",
      "field" : "Computer Science",
      "releaseDate" : "12-02-13",
      "closeDate" : "17-02-13",
      "link" : "http://example.com"
    },
    {
      "id" : "BL104", //Edital
      "slots" : 3,
      "type" : "introToResearch",
      "holder" : "Prof. Rodrigo",
      "field" : "Management",
      "releaseDate" : "12-02-13",
      "closeDate" : "17-02-13",
      "link" : "http://example.com"
    },
    {
      "id" : "BL105", //Edital
      "slots" : 1,
      "type" : "introToResearch",
      "holder" : "Prof. Rogalski",
      "field" : "Quimics",
      "releaseDate" : "12-02-13",
      "closeDate" : "17-02-13",
      "link" : "http://example.com"
    }
]};
*/

// Module methods
var getScholarshipByID = function (id) {
  ScholarshipModel.findOne({ id: scholarship.id }, function (scholarship) {
    return scholarship;
  });
};


var getAllScholarships = function (callback) {
  ScholarshipModel.find({}, function (err, allDocs) {
    if(err) console.log(err);
    callback(allDocs);
  });
};



var saveScholarship = function (scholarship) {
  ScholarshipModel.findOne({ id: scholarship.id }, function (isThere) {

    if (!isThere){
      var releaseDate = scholarship.releaseDate.split('.');
      var closeDate = scholarship.closeDate.split('.');

      var scholarshipToMongo = new ScholarshipModel({
        slots: parseInt(scholarship.slots, 10),
        type: scholarship.type,
        holder: scholarship.holder,
        link: scholarship.link,
        id: scholarship.id,
        field: scholarship.field,
        releaseDate: new Date(releaseDate[2], releaseDate[1], releaseDate[0]),
        closeDate: new Date(closeDate[2], closeDate[1], closeDate[0])
      });

      scholarshipToMongo.save(function (err, scholarship){
      //  console.log(scholarship.id);
      });

    }
  });
};

//just one note: var date =new Date(79,5,24) YY,MM,DD

module.exports = {
  getScholarshipByID : getScholarshipByID,
  getAllScholarships : getAllScholarships,
  saveScholarship : saveScholarship
};



