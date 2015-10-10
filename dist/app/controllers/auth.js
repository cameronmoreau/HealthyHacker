(function() {
    'use strict';

    var app = angular.module('controller.auth', []);

    app.controller('LoginController', function($scope) {

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

            Azureservice.query('productivity', {
                })
                .then(function(items) {
                    // Assigin the results to a $scope variable
                    $scope.items = items;
                    console.log(items);

                }, function(err) {
                    console.error('There was an error quering Azure ' + err);
                });

            // Azureservice.insert('productivity', {
            //         level: 12
            //     })
            //     .then(function() {
            //         console.log('Insert successful');
            //     }, function(err) {
            //         console.error('Azure Error: ' + err);
            //     });

            // Azureservice.login('aad')
            //     .then(function() {
            //         console.log('Login successful');
            //     }, function(err) {
            //         console.error('Azure Error: ' + err);
            //     });

            //console.log($scope.user.email);
            //console.log($scope.user.password);
        }

    });

})();
