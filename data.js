'use strict'
var _ = require('underscore');
// var globalShortcut = require('global-shortcut');
 var data = require('./models/shortcuts');
 var mouse = require('./models/mouse');
//var list = data.get();

var mouseList = require('./models/mouse');
var lastMouse = {x :0 , y:0};

exports.shortCuts = function(){


/*	// map input shortcut with list data
	_.each(list, function(item) {
		var tempkey = item["key"];
		var ret = globalShortcut.register(tempkey, function() {
      console.log("key");
			console.log(item["score"]);
			//free the key
			globalShortcut.unregister(tempkey);

		});


    if (!ret) {  console.log("registration failed");}

  	  // Check whether a shortcut is registered.

     // console.log(globalShortcut.isRegistered(tempkey));
	});*/


}

exports.getMouse = function() {
    var currentMouse = require('screen').getCursorScreenPoint();
    return mouseList.distance(currentMouse,lastMouse);
};

exports.getScore = function(list) {
    return mouse.score(list);
}

exports.mouse = function(){
  var electronScreen = require('screen');
  var list = [];

  setInterval(function(){

  	var currentMouse = electronScreen.getCursorScreenPoint();
  	var res = mouseList.distance(currentMouse,lastMouse);

  	list.push(res);
  	// console.log(res);
  	lastMouse = currentMouse;

  },50);

  setInterval(function(){
      return mouse.score(list);
      list = [];

  },3000);


}
