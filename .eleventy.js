const { DateTime } = require("luxon");

module.exports = (function (eleventyConfig) {
    eleventyConfig.addFilter("asPostDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addCollection("daily", function (collection) {
        return collection.getFilteredByGlob("./daily/*.md");
    });
});