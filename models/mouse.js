'use strict'
var _ = require("underscore");


var result = [];


exports.distance = function(a,b){
	var result = Math.sqrt(Math.pow((a["x"] - b["x"]),2) + Math.pow((a["y"]-b["y"]),2));
	return parseInt(result);
};

exports.score = function(list){

	// var length = list.length;
	// list = list.sort();

	// var mid = list[parseInt(length/2)];
	// var low_q = list[parseInt(length/4)];

	// var high_q = list[parseInt(3*length/4)];

	// result.push({
	// 	best: high_q,
	// 	med: mid,
	// 	low: low_q

	// });
	// return result;
	var sum = 0;

	_.each(list,function(element){
		sum = sum + element;
	});
	sum = sum/3;
	if((sum >= 200) && (sum <= 800)){
		return 1;
	}
	else if (sum > 800){
		return (((sum - 800)/800)%10);
	}
	else
		return ((200 - sum)/200) % 10

};
