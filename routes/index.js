/*
  Index Route
*/

var indexRoute = {
    handler: function (request) {
      // Render the view with the custom greeting
      request.reply.view('index.html', { greeting: 'Hello world' });
    }
};

module.exports = indexRoute;