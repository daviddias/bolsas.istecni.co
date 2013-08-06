var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var ScholarshipModel = require('./models/Scholarship');
var InactiveScholarshipModel = require('./models/InactiveScholarship');


// Connect to DB
mongoose.connect('mongodb://localhost/scholarshipsIST');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connected Successfully to DB");
});


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


var removeInactiveScholarships = function() {

    ScholarshipModel.find(function(err, scholarships){
        scholarships.forEach(function(scholarship) {
            if(scholarship.closeDate < new Date()){

                ScholarshipModel.remove({ scholarid: scholarship.scholarid}, function(err, scholar) {
                    if(err) console.log(err);
                });

                new InactiveScholarshipModel(scholarship).save(function(err, scholar) {
                    if(err) console.log(err);
                });
            }
        });
    });
};

var saveScholarship = function (scholarship) {

    var releaseDate = scholarship.releaseDate.split('.');
    var closeDate = scholarship.closeDate.split('.');

    ScholarshipModel.findOne({ id: scholarship.scholarid + "." + releaseDate[2]}, function (err, isThere) {

        if (!isThere){

            var scholarshipToMongo = new ScholarshipModel({
                slots: parseInt(scholarship.slots, 10),
                type: scholarship.type,
                holder: scholarship.holder,
                link: scholarship.link,
                id: scholarship.scholarid + "." + releaseDate[2],
                scholarid: scholarship.scholarid,
                field: scholarship.field,
                releaseDate: new Date(releaseDate[2], parseInt(releaseDate[1],10)-1, releaseDate[0]),
                closeDate: new Date(closeDate[2], parseInt(closeDate[1],10)-1, closeDate[0])
            });

            scholarshipToMongo.save(function (err, scholarship){
                if(err)
                    console.log(err);
            });
        }
    });
};

//just one note: var date =new Date(79,5,24) YY,MM,DD

module.exports = {
  getScholarshipByID: getScholarshipByID,
  getAllScholarships: getAllScholarships,
  saveScholarship: saveScholarship,
  removeInactiveScholarships: removeInactiveScholarships
};



