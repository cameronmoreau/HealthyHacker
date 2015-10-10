'use strict'
var _ = require('underscore');
var globalShortcut = require('global-shortcut');
var data = require('./models/shortcuts');

exports.shortCuts = function(){

	// map input shortcut with list data
	_.map(data.get(), function(key) {
		var ret = globalShortcut.register(key, function() {
			console.log(key);

			//free the key
			globalShortcut.unregister(key);

		});

    
    if (!ret) {  console.log("registration failed");}

  	  // Check whether a shortcut is registered.
     console.log(globalShortcut.isRegistered(key));		
	});
   

}

    

exports.mouse = function(){
  var electronScreen = require('screen');
  setInterval(function(){console.log(electronScreen.getCursorScreenPoint())},2000);

}
