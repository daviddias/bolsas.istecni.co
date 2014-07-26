var AmpersandModel = require('ampersand-model');
var moment = require('moment');

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        field: ['string', true, ''],
        slots: ['number', true, ''],
        type: ['string', true, ''],
        holder: ['string', true, ''],
        link: ['string', true, ''],
        scholarshipId: ['string', true, ''],
        field: ['string', true, ''],
        releaseDate: ['date', true, ''],
        closeDate: ['date', true, ''],
        active: ['boolean', true, 'true']
    },
    derived: {
        releaseDateFormated: {
            deps: ['releaseDate'],
            fn: function() {
                return moment(this.releaseDate).format('L');
            }
        },
        closeDateFormated: {
            deps: ['closeDate'],
            fn: function() {
                return moment(this.closeDate).format('L');
            }
        },
        scholarshipIdUpperCase: {
            deps: ['scholarshipId'],
            fn: function() {
                return this.scholarshipId.toUpperCase();
            }
        }
    }
});
