(function() {
    'use strict';
    var app = angular.module('service.auth', ['ngResource']);

    app.factory('Auth', function(Parse, $http) {
        return {
            register: function(username, password, firstName, lastName) {
                return $http({
                    method: 'POST',
                    url: 'https://api.parse.com/1/users/',
                    data:  '{"username":"' + username +
                            '","password":"' + password +
                            '","firstName":"' + firstName +
                            '","lastName":"' + lastName + '"}',
                    headers: Parse.getHeaders()
                });
            }
        }
    });

})();
