var tiqav = require("../index");
var callback = function(err, result) {
  console.log(result);
};

tiqav.search.search("jojo", callback);
tiqav.search.newest(callback);
tiqav.search.random(callback);
