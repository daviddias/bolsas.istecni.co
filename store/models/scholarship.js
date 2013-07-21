var mongoose = require('mongoose');

var ScholarshipSchema = require('./../schemas/scholarship');

var Scholarship = mongoose.model(
  'Scholarship', ScholarshipSchema);

module.exports = Scholarship;