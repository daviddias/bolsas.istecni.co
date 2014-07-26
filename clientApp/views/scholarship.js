var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.scholarship,
    bindings: {
        'model.field': '[role=field]',
        'model.slots': '[role=slots]',
        'model.holder': '[role=holder]',
        'model.type': '[role=type]',
        'model.link': {
            type: 'attribute',
            role: 'link',
            name: 'href'
        },
        'model.scholarshipIdUpperCase': '[role=link]',
        'model.releaseDateFormated': '[role=release-date]',
        'model.closeDateFormated': '[role=close-date]'
    }
});
