var Collection = require("ampersand-rest-collection");
var Scholarship = require("./scholarship.js");

module.exports = Collection.extend({
    model: Model,
    url: "/scholarships"
});
