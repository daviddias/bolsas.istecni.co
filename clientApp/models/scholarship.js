var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        field: ['string', true, ''],
        slots: ['string', true, ''],
        type: ['string', true, ''],
        holder: ['string', true, ''],
        link: ['string', true, ''],
        scholarshipId: ['string', true, ''],
        field: ['string', true, ''],
        releaseDate: ['date', true, ''],
        closeDate: ['date', true, ''],
        active: ['boolean', true, 'true']
    }
});
