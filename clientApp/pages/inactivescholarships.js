var View = require('ampersand-view');
var templates = require('../templates');
var ScholarshipView = require('../views/scholarship');

module.exports = View.extend({
    template: templates.pages.home,
    events: {},
    render: function() {
        this.renderWithTemplate();
        this.renderCollection(this.collection, ScholarshipView, this.getByRole('scholarships'), {
            filter: function(model) {
                return !(model.active);
            }
        });
        if(!this.collection.length){
            this.fetchScholarships();
        }
    },
    fetchScholarships: function() {
        this.collection.fetch();
        console.log(this.collection);
        return false;
    }
});
