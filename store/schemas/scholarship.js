var mongoose = require('mongoose');

var ScholarshipSchema = new mongoose.Schema({
  slots: Number,
  type: String,
  holder: String,
  link: String,
  id: {type: String, unique: true},
  field: String,
  releaseDate: Date,
  closeDate: Date
});

module.exports = ScholarshipSchema;

//just one note:
//var date = new Date(79,5,24) YY,MM,DD