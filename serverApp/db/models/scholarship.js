var mongoose = require('mongoose');

var scholarshipSchema = new mongoose.Schema({
  slots: Number,
  type: String,
  holder: String,
  link: String,
  id: {type: String, unique: true}, // our unique ID
  scholarshipId: String,
  field: String,
  releaseDate: Date, // var date = new Date(79,5,24) YY,MM,DD
  closeDate: Date,
  active: {type: Boolean, default: true}
});

scholarshipSchema.statics.findByScholarshipId = function (scholarshipId, cb) {
  this.find({ id: scholarshipId }, cb);
};

scholarshipSchema.statics.findAll = function (cb) {
  this.find({},cb);
};

scholarshipSchema.statics.findActive = function (cb) {
    this.find({ active: true },cb);
};

var Scholarship = module.exports = mongoose.model('Scholarship', scholarshipSchema);



