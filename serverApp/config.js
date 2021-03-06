var config = require('getconfig');
var templatizer = require('templatizer');

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
            cssDir + '/vendor/bootstrap-3.0.3-dist/bootstrap-theme.css',
            cssDir + '/app.css'
        ],
        
        beforeBuildJS: function() {
            if(config.isDev) {
                templatizer(__dirname + '/../clientApp/templates', appDir + '/templates.js');
            }
        },

        beforeBuildCss: function(done) {
            if(!config.isDev) {
                done();
                return;
            }
        }
    }

};
