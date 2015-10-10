'use strict';

var _ = require('lodash');
var app = require('app');
var path = require('path');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');
var menubar = require('menubar');

var options = {
    "debug": true,
    "version": "1.0.0",
    "views_dir": "views",
    "root_view": "index.html"
};

options = _.extend({
    // ADDITIONAL CUSTOM SETTINGS
}, options);


var mainWindow = null;

var input = require('./data');

// Report crashes to our server.
require('crash-reporter').start();

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//Setup menu bar
var menu = menubar({
    index: path.join('file://', __dirname, options.views_dir, 'menubar.html'),
    height: 200

});
menu.on('ready', function() {
    input.mouse();

});

app.on('ready', function() {
    //AppWindow.open();

    openMainWindow();


    //Catch for show main
    ipc.on('show-main', function() {
        openMainWindow();
    });


    //console.log(robot.getMousePos());
    // check for pressed shortcuts
    input.shortCuts();
});

var openMainWindow = function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadUrl(path.join('file://', __dirname, options.views_dir, options.root_view));
    if (options.debug) {
        mainWindow.openDevTools();
    }

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}
