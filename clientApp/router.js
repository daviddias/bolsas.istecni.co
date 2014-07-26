var Router = require('ampersand-router');
var ScholarshipsPage = require('./pages/home');

module.exports = Router.extend({
    routes: {
        '': 'scholarships',
        'inactive': 'inactiveScholarships'
    },

    //Route handlers
    scholarships: function() {
        this.trigger('newPage', new ScholarshipsPage({
            collection: app.scholarships
        }));
    },

    inactiveScholarships: function() {
        this.trigger('newPage', new ScholarshipsPage({
        }));
    }

});
