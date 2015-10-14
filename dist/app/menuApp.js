(function() {
    'use strict';
    var ipc = require('ipc');

    //3600000 ms -> 60 min

    var app = angular.module('HealthyHacker', []);

    app.controller('MenuBarController', function($scope) {
        $scope.breakTime = new Date().getTime() + 1220000;
        $scope.minutesLeft = Math.ceil((Math.abs($scope.breakTime - new Date().getTime()) / 1000) / 60);

        $scope.openMainWindow = function() {
            ipc.send('show-main');
        }

        $scope.startBreak = function() {
            ipc.send('show-break');
        }
    });

})();
