var http = require('http');
var url = require('url');
var template = require('string_tmpl').Template;

var Base = function(){};

Base.prototype.createUrl = function(url, value) {
    return template.format(url, value);
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
