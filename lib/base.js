var http = require('http');
var url = require('url');
var querystring = require('querystring');

var Base = function(){};

Base.prototype.createUrl = function(url, value) {
    var url = url;
    var qs = querystring.stringify(value);
    url += qs;
    return url;
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
      cb(null, JSON.parse(data));
    });
  }).on('error', function(e) {
    cb(e);
  });
};

module.exports = Base;
