var expiredHandler = require('./../controllers/expired.js');

var expired = {
  method: 'GET',
  path: '/past',
  config: {
    handler: expiredHandler
  }
};

module.exports = expired;