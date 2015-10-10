(function() {
    'use strict';

    var app = angular.module('controller.base', []);

    app.controller('MenuBarController', function($scope) {
        $scope.timeLeft = new Date.now();
    });

})();
