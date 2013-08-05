var mongoose = require('mongoose');

var ScholarshipSchema = require('./../schemas/scholarship');

var InactiveScholarship = mongoose.model(
    'InactiveScholarship', ScholarshipSchema);

module.exports = InactiveScholarship;
