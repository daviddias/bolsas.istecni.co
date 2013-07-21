var indexHandler = require('./../controllers/index.js')

var index = {
  method: 'GET',
  path: '/',
  config: {
  	handler: indexHandler
  }
}

module.exports = index