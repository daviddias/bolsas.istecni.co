var server = require('./../index.js');
var path   = require('path');

var clientAssets = {
  method: 'GET',
  path: '/{path*}',
  config : {
    handler: {
      directory: function(){
        var staticAssetsPath = path.join(__dirname, '..', '/public');
        console.log(staticAssetsPath);
        return {
          path: staticAssetsPath,
          listing: true,
          index: true 
        };}()
    }
  }
};

server.route(clientAssets);