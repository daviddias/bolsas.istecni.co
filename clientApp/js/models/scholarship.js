var AmpersandModel = require('ampersand-model');

module.exports = AmpersandMode.extend({
    type: 'scholarship',
    props: {
        field: ['string', true, ''],
        slots: ['string', true, ''],
        type: ['string', true, ''],
        holder: ['string', true, ''],
        link: ['string', true, ''],
        scholarshipId: ['string', true, ''],
        field: ['string', true, ''],
        releaseDate: ['date', true, ''],
        closeDate: ['date', true, ''],
        active: ['boolean', true, '']
    }
});
