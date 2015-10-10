'use strict'
var _ = require('underscore');

var list_shortcuts = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	_.each(alphabet, function(letter) {
  	list_shortcuts.push("ctrl+"+letter);

});
exports.get = function(){
	return list_shortcuts;
};