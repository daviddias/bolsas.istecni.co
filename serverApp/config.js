var config = require('getconfig');

var appDir = __dirname + '/../clientApp';
var cssDir = __dirname + '/public/css';


module.exports = {
    appPath: '/',

    moonboots: {
        jsFileName: 'bolsas-tecnico',
        cssFileName: 'bolsas-tecnico',
        main: appDir + '/app.js',
        developmentMode: config.isDev,

        libraries: [
            __dirname + '/public/js/vendor/jquery-1.10.2/jquery.js'
        ],

        stylesheets: [
            cssDir + '/vendor/bootstrap-3.0.3-dist/bootstrap.css',
            cssDir + '/app.css'
        ],

        beforeBuildCss: function(done) {
            if(!config.isDev) {
                done();
                return;
            }
        }
    }

};
