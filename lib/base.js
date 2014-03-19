var http = require('http');
var url = require('url');
var template = require('lodash').template;

var Base = function(){};

Base.prototype.createUrl = function(url, value) {
    return template(url, value);
};

Base.prototype.get = function(tiqavUrl, cb) {
  var params = url.parse(tiqavUrl);
  params.withCredentials = false;
  http.get(params, function(res) {
    var data = '';
    res.on("data", function(chunk) {
      data += chunk;
    });
    res.on("end", function() {
      cb(null, data);
    });
  }).on('error', function(e) {
    cb(e);
  });
};

module.exports = Base;
