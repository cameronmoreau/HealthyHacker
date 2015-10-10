(function() {
    'use strict';

    var app = angular.module('controller.home', ['ui.bootstrap']);

    app.controller('ProjectsController', function($scope, $uibModal) {
        $scope.projects = [{
            name: 'TAMU Hack',
            team: 4,
            date: '10/10/2015'
        }, {
            name: 'HackDFW',
            team: 4,
            date: '4/10/2015'
        }, {
            name: 'MITHack',
            team: 4,
            date: '1/10/2015'
        }, ];


        $scope.openLoginModal = function() {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'auth/login.html',
                controller: 'LoginController'
            });
        }

        $scope.openRegisterModal = function() {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'auth/register.html',
                controller: 'LoginController'
            });
        }

    });



})();
