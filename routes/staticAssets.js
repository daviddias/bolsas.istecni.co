var staticAssets = {
  method: 'GET',
  path: '/{path*}',
  config : {
  	handler: {
      directory: { 
      	path: 'public', 
      	listing: false, 
      	index: true }
    }
  }
}
module.exports = staticAssets