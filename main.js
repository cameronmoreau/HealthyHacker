'use strict';

var _ = require('lodash');
var app = require('app');
var path = require('path');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');
var menubar = require('menubar');


//var robot = require("robotjs");

var input = require('./data');
// Report crashes to our server.
require('crash-reporter').start();

var mainWindow = null;
var options = {
    "debug": true,
    "version": "1.0.0",
    "views_dir": "views",
    "root_view": "index.html"
};

options = _.extend({
    // ADDITIONAL CUSTOM SETTINGS
}, options);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//Setup menu bar
var menu = menubar({
    index: path.join('file://', __dirname, options.views_dir, 'menubar.html'),
    height: 155

});
menu.on('ready', function() {
    input.mouse();
    input.shortCuts();
});

app.on('ready', function() {
    showMainWindow();

    ipc.on('show-main', function() {
        showMainWindow();
    });

    ipc.on('show-break', function() {
        showBreakWindow();
    });
});

var showMainWindow = function() {
    mainWindow = new BrowserWindow({
        width: 950,
        height: 625
    });
    mainWindow.loadUrl(path.join('file://', __dirname, options.views_dir, options.root_view));
    if (options.debug) {
        mainWindow.openDevTools();
    }
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

var showBreakWindow = function() {
    var breakWindow = new BrowserWindow({
        width: 500,
        height: 300
    });
    breakWindow.loadUrl(path.join('file://', __dirname, options.views_dir, 'fisi.html'));
    if (options.debug) {
        breakWindow.openDevTools();
    }
    breakWindow.on('closed', function() {
        breakWindow = null;
    });
}
