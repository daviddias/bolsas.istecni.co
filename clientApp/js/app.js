var Scholarships = require('./models/scholarships');

module.exports = {
    run: function(spec) {
        var self = window.app = this;

        this.scholarships = new Scholarships();
    };
};
