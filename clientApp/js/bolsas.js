url_prefix = process.env.NODE_ENV === 'production' ? 'http://bolsas.tecni.co/' : 'http://localhost:8080/';
 
require('./app.js');
require('./controllers');
require('./directives.js');
require('./filters.js');
require('./services.js');