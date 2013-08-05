var mongoose = require('mongoose');
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


var moveInactiveScholarship = function(scholarship) {

    console.log("Move inactive scholarship!");

    var releaseDate = scholarship.releaseDate.split('.');
    var closeDate = scholarship.closeDate.split('.');

    var inactiveScholarship  = new InactiveScholarshipModel({
        slots: parseInt(scholarship.slots, 10),
        type: scholarship.type,
        holder: scholarship.holder,
        link: scholarship.link,
        id: scholarship.id,
        field: scholarship.field,
        releaseDate: new Date(releaseDate[2], parseInt(releaseDate[1],10)-1, releaseDate[0]),
        closeDate: new Date(closeDate[2], parseInt(closeDate[1],10)-1, closeDate[0])
    });

    ScholarshipModel.findOne({ id: scholarship.id}, function(err, scholarship) {
        inactiveScholarship.save(function(err, scholarship) {
            if(err)
                console.log(err);
            else
                ScholarshipModel.where('id').equals(scholarship.id).remove(function(err,info) {
                    if(err)
                        console.log("Remove not sucessful!");
                });
        });
    });
};

var saveScholarship = function (scholarship) {
  ScholarshipModel.findOne({ id: scholarship.id }, function (err, isThere) {

    var releaseDate = scholarship.releaseDate.split('.');
    var closeDate = scholarship.closeDate.split('.');

    console.log("");
    console.log(scholarship.id);

    if (!isThere){

    console.log("Dont exist!");

    var scholarshipToMongo = new ScholarshipModel({
        slots: parseInt(scholarship.slots, 10),
        type: scholarship.type,
        holder: scholarship.holder,
        link: scholarship.link,
        id: scholarship.id,
        field: scholarship.field,
        releaseDate: new Date(releaseDate[2], parseInt(releaseDate[1],10)-1, releaseDate[0]),
        closeDate: new Date(closeDate[2], parseInt(closeDate[1],10)-1, closeDate[0])
    });

    scholarshipToMongo.save(function (err, scholarship){
        if(err)
            console.log(err);
    });

    }else{
        console.log("Already exists!");
        console.log(new Date());
        console.log(new Date(closeDate[2], closeDate[1], closeDate[0]));

        if(new Date(closeDate[2], parseInt(closeDate[1],10)-1, closeDate[0]) < new Date()) {
            console.log("Inactive Scholarship!");
            moveInactiveScholarship(scholarship);
        }
    }
  });
};

//just one note: var date =new Date(79,5,24) YY,MM,DD

module.exports = {
  getScholarshipByID : getScholarshipByID,
  getAllScholarships : getAllScholarships,
  saveScholarship : saveScholarship,
  moveInactiveScholarship: moveInactiveScholarship
};



