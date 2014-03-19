var Search = require("./lib/search");
module.exports.createImageUrl = function(id, ext) {
    return "http://img.tiqav.com/" + id + "." + ext;
}
module.exports.createThumbnailUrl = function(id) {
    return "http://img.tiqav.com/" + id + ".th.jpg";
}

module.exports.search = new Search();
