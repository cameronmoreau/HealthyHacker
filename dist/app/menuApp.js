(function() {
    'use strict';

    var ipc = require('ipc');

    var app = angular.module('HealthyHacker', []);

    app.controller('MenuBarController', function($scope) {
        $scope.breakTime = new Date().getTime() + 620000;
        $scope.minutesLeft = Math.ceil((Math.abs($scope.breakTime - new Date().getTime()) / 1000) / 60);

        $scope.openMainWindow = function() {
            ipc.send('show-main');
        }

        $scope.startBreak = function() {
            ipc.send('show-break');
        }
    });

})();
