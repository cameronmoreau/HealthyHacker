(function() {
    'use strict';
    var app = angular.module('service.auth', ['ngResource']);

    app.factory('Auth', function(Parse) {
        return {
            login: function() {
                console.log('logged in ' + Parse.getAppId());
            }
        }
    });

})();
