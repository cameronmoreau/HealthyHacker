(function() {
    'use strict';

    var app = angular.module('controller.auth', []);

    app.controller('LoginController', function($scope, Azureservice) {
        
        var myEl = angular.element(document.querySelector('#passwordField'));


        $scope.user = {
            email: '',
            password: '',
            role:'developer'
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

        $scope.register = function(){
            var firstName = $scope.user.firstName;
            var lastName = $scope.user.lastName;
            var email = $scope.user.email;
            var password = $scope.user.password;
            var role = $scope.user.role;

            if(!firstName || !lastName|| !email || !password || !role){
                alert('error');
            }
            else{
                // register here
            }

            console.log(firstName+" "+
                lastName+" "+
                email+" "+
                password+" "+
                role);
        }
        $scope.changeDropDown = function(role){
            
            $scope.user.role = role;
        }

    });

})();
