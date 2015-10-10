(function() {
    'use strict';
    var app = angular.module('service.parse', []);
   
    app.factory('Parse', function() {
        var appId = 'CfqLD4ljGm9AWaKQXgYsFtQcB2FJyG0AoEi7KVPp';
        var restApiKey = 'Kna1JhHX4WpRonGOZIMPxQVFLV0ugDQgO4t4OK0D';

        return {
            getAppId: function() { return appId; },
            getRestApiKey: function() { return restApiKey; },

            // login: function { 
            // }
        }
    });








})();
