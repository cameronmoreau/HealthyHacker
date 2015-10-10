'use strict'
var _ = require('underscore');
var globalShortcut = require('global-shortcut');
var data = require('./models/shortcuts');
var list = data.get();
exports.shortCuts = function(){

	

	// map input shortcut with list data
	_.each(list, function(item) {
		var tempkey = item["key"];
		var ret = globalShortcut.register(tempkey, function() {
			console.log(tempkey);
			console.log(item["score"]);
			//free the key
			globalShortcut.unregister(tempkey);

		});

    
    if (!ret) {  console.log("registration failed");}

  	  // Check whether a shortcut is registered.
     console.log(globalShortcut.isRegistered(tempkey));		
	});
   

}

    

exports.mouse = function(){
  var electronScreen = require('screen');
  setInterval(function(){console.log(electronScreen.getCursorScreenPoint())},2000);

}