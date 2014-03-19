var util = require('util');
var vm = require('vm');
var searchUrl = "http://api.tiqav.com/search.json?";
var newestUrl = "http://api.tiqav.com/search/newest.json";
var randomUrl = "http://api.tiqav.com/search/random.json";

var Base = require('./base');

var Search = function(){};

util.inherits(Search, Base);

Search.prototype.search = function(query, callback) {
    var url = this.createUrl(searchUrl, {
        q:query
    });
    var searchCallback = function(obj) {
        callback(null, obj);
    };
    this.get(url, function(err, result) {
        if (err) callback(err);
        try {
            searchCallback(result);
        } catch (e) {
            callback(e);
        }
    });
};

Search.prototype.newest = function(callback) {
    var newest = function(obj) {
        callback(null, obj);
    };
    this.get(newestUrl, function(err, result) {
        if (err) callback(err);
        newest(result);
    });
};

Search.prototype.random = function(callback) {
    var random = function(obj) {
        callback(null, obj);
    };
    this.get(randomUrl, function(err, result) {
        if (err) callback(err);
        random(result);
    });
};

module.exports = Search;
