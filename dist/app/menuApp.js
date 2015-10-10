(function() {
    'use strict';

    var app = require('app');
    var Menu = require('menu');
    var Tray = require('tray');
    var ipc = require('ipc');

    //3600000 ms -> 60 min

    var app = angular.module('HealthyHacker', []);

    //$interval(fn, delay, [count], [invokeApply], [Pass]);

    

    app.controller('MenuBarController', ['$scope', '$interval',
      function($scope, $interval) {
        $scope.breakTime = new Date().getTime() + 620000;
        $scope.minutesLeft = Math.ceil((Math.abs($scope.breakTime - new Date().getTime()) / 1000) / 60);

        $scope.openMainWindow = function() {

            ipc.send('show-main');
        }
    }]);

})();
