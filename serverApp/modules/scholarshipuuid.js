var crypto = require('crypto');

module.exports = function (scholarshipId, releaseDate) {
  var hash = crypto.createHash('md5').update(scholarshipId + releaseDate.toString()).digest('hex');
  return hash;
}