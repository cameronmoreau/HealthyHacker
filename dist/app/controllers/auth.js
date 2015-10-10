(function() {
    'use strict';

    var app = angular.module('controller.auth', ['ui.bootstrap']);

    app.controller('LoginController', function($scope, $modalInstance, Auth) {
        var myEl = angular.element(document.querySelector('#passwordField'));

        $scope.user = {
            email: '',
            password: '',
            role:'developer'
        }

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        }

        $scope.login = function() {
            console.log('login');
            Auth.login()
                .then(function(user) {
                    console.log(user)
                })
                .catch(function(error) {
                    console.log(error);
                });
            //Auth.login($scope.user.email, $scope.user.password);

            //console.log($scope.user.email);
            //console.log($scope.user.password);
        }

        $scope.check = function() {
            console.log($scope.user.password.length);
            console.log($scope.user.email);

            if ($scope.user.email && $scope.user.password.length > 0) {
                //validation code here
            }
        }


        $scope.register = function(){
            var firstName = $scope.user.firstName;
            var lastName = $scope.user.lastName;
            var email = $scope.user.email;
            var password = $scope.user.password;
            var role = $scope.user.role;

            var firstNameEl = angular.element(document.querySelector('.input-first-name'));
            var lastNameEl = angular.element(document.querySelector('.input-last-name'));
            var emailEl = angular.element(document.querySelector('.input-email'));
            var passwordEl = angular.element(document.querySelector('.input-password'));

            var valid = true;



            // YEAH THIS CODE SUCKS I'M TIRED AND I'M SORRY
            if(!firstName){
                firstNameEl.addClass('has-error');
                valid = false;
            }
            else{
                firstNameEl.removeClass('has-error');
            }
            if(!lastName){
                lastNameEl.addClass('has-error');
                valid = false;
            }
            else{
                lastNameEl.removeClass('has-error');
            }
            if(!password){
                passwordEl.addClass('has-error');
                valid = false;
            }
            else{
                passwordEl.removeClass('has-error');
            }
            if(!email){
                emailEl.addClass('has-error');
                valid = false;
            }
            else{
                emailEl.removeClass('has-error');
            }

            if(valid){
                $scope.cancel();
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
