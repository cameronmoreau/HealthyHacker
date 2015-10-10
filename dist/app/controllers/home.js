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

        $scope.openStartDateTimePicker = function($event) {
            $scope.status.opened = true;
        };
         $scope.openEndDateTimePicker = function($event) {
            $scope.status.opened = true;
        };

          $scope.status = {
            opened: false
          };

        $scope.test = function(){
            console.log($scope.addProjectStartTime);
        }
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];




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

        $scope.openAddModal = function() {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'home/addProject.html',
                controller: 'ProjectsController'
            });
        }

    });


})();
