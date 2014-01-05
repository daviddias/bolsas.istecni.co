var handler     = require('./../resources').scholarships;
var server      = require('./../index.js');
var Hapi        = require('hapi');

server.route({
  method: 'GET',
  path: '/scholarships',
  config: { 
    handler: handler,
    validate: {
      query: {
        slots: Hapi.types.Number().min(0).max(20),
        type: Hapi.types.String(), 
        holder: Hapi.types.String(),
        link: Hapi.types.String(),
        id: Hapi.types.String(),
        scholarshipId: Hapi.types.String(),
        field: Hapi.types.String(),
        // releaseDate: Hapi.types.Date(),
        // closeDate: Hapi.types.Date(),
        active: Hapi.types.Boolean()
      }
    } 
  }
});