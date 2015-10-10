'use strict'
var _ = require("underscore");

var result = [];


exports.slope = function(a,b){
	result.push((a["x"] - b["x"])/ (a["y"]-b["y"]));
};







