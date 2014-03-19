var tiqav = require("../index");
var callback = function(err, result) {
  console.log(result);
  console.log(result[0].id);
  console.log(tiqav.createImageUrl(result[0].id, result[0].ext));
};

tiqav.search.search("jojo", callback);
tiqav.search.newest(callback);
tiqav.search.random(callback);
