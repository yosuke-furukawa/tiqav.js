var util = require('util');
var searchUrl = "http://api.tiqav.com/search.json?q={query}&callback={callback}";
var newestUrl = "http://api.tiqav.com/search/newest.json?callback={callback}";
var randomUrl = "http://api.tiqav.com/search/random.json?callback={callback}";

var Base = require('./base');

var Search = function(){};

util.inherits(Search, Base);

Search.prototype.search = function(query, callback) {
    var url = this.createUrl(searchUrl, {
        query:query,
        callback:"searchCallback"
    });
    console.log(url);
    var searchCallback = function(obj) {
        callback(null, obj);
    };
    this.get(url, function(err, result) {
        if (err) callback(err);
        try {
            eval(result);
        } catch (e) {
            callback(e);
        }
    });
};

Search.prototype.newest = function(callback) {
    var url = this.createUrl(newestUrl, {
        callback:"newest"
    });
    var newest = function(obj) {
        callback(null, obj);
    };
    this.get(url, function(err, result) {
        if (err) callback(err);
        eval(result);
    });
};

Search.prototype.random = function(callback) {
    var url = this.createUrl(randomUrl, {
        callback:"random"
    });
    var random = function(obj) {
        callback(null, obj);
    };
    this.get(url, function(err, result) {
        if (err) callback(err);
        eval(result);
    });
};

module.exports = Search;
