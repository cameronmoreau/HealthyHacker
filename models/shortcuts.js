'use strict'

var _ = require('underscore');

var list_shortcuts = [];

var tempkey;

var addScore = function(stroke,letter,random){
	tempkey = stroke + letter;
	list_shortcuts.push({
		key: tempkey,
		score: Math.floor((Math.random() * random) + 1)

	});
};

_.each("bdefghijklmnopqrstuwxy".split(""), function(letter) {
  	addScore("ctrl+",letter,10);
  	addScore("cmd+",letter,10);	
});


//copy and paste strokes
_.each("vza".split(""), function(letter) {
  	addScore("ctrl+",letter,5);
  	addScore("cmd+",letter,5);
});

exports.get = function(){
	return list_shortcuts;
};

