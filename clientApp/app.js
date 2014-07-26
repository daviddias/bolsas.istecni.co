var _ = require('underscore');

var Scholarships = require('./models/scholarships');
var Router = require('./router');
var MainView = require('./views/main');

var domReady = require('domready');

module.exports = {
    run: function(spec) {
        var self = window.app = this;

        this.scholarships = new Scholarships();

        this.router = new Router();

        domReady(function() {
            var mainView = self.view = new MainView({
                el: document.body
            });

            mainView.render();

            self.router.on('newPage', mainView.setPage, mainView);

            self.router.history.start({pushState: true, root: '/'});

        });

    },

    navigate: function(page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {trigger: true});
    }
};

module.exports.run();
