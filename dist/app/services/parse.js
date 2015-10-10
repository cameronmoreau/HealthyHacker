(function() {
    'use strict';
    var app = angular.module('service.parse', ['ngResource']);

    app.factory('Parse', function() {
        var appId = 'CfqLD4ljGm9AWaKQXgYsFtQcB2FJyG0AoEi7KVPp';
        var restApiKey = 'Vb0o0SxCD6zfaJn0EHqeiOlLXKoGFUw0dHnb5EPf';

        return {
            getAppId: function() { return appId; },
            getRestApiKey: function() { return restApiKey; },
            getHeaders: function() {
                return {
                    'X-Parse-Application-Id': Parse.getAppId(),
                    'X-Parse-REST-API-Key': Parse.getRestApiKey(),
                    'X-Parse-Revocable-Session': 1,
                    'Content-Type': 'application/json'
                };
            }
        }
    });
})();
