(function() {
    'use strict';

    var app = angular.module('controller.auth', []);

    app.controller('LoginController', function($scope, Azureservice) {

        var myEl = angular.element(document.querySelector('#passwordField'));


        $scope.user = {
            email: '',
            password: ''
        }

        $scope.check = function() {
            console.log($scope.user.password.length);
            console.log($scope.user.email);

            if ($scope.user.email && $scope.user.password.length > 0) {
                //validation code here
            }
        }

        $scope.login = function() {
            //Auth.login($scope.user.email, $scope.user.password);
            Azureservice.login('aad')
                .then(function() {
                    console.log('Login successful');
                }, function(err) {
                    console.error('Azure Error: ' + err);
                });

            //console.log($scope.user.email);
            //console.log($scope.user.password);
        }

    });

})();
