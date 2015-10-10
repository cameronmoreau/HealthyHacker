(function() {
    'use strict';

    var app = angular.module('service.parse', []);

    var appId = 'CfqLD4ljGm9AWaKQXgYsFtQcB2FJyG0AoEi7KVPp';
    var restApiKey = 'Vb0o0SxCD6zfaJn0EHqeiOlLXKoGFUw0dHnb5EPf';

    var getAppId = function() { return appId; }
    var getRestApiKey = function() { return restApiKey; }
    var getHeaders = function() {
        return {
            'X-Parse-Application-Id': appId,
            'X-Parse-REST-API-Key': getRestApiKey,
            'X-Parse-Revocable-Session': 1,
            'Content-Type': 'application/json'
        };
    }


    // app.factory('Parse', function() {
    //     var appId = 'CfqLD4ljGm9AWaKQXgYsFtQcB2FJyG0AoEi7KVPp';
    //     var restApiKey = 'Vb0o0SxCD6zfaJn0EHqeiOlLXKoGFUw0dHnb5EPf';
    //
    //     return {
    //         getAppId: function() { return appId; },
    //         getRestApiKey: function() { return restApiKey; },
    //         getHeaders(): function() {
    //             return {
    //                 'X-Parse-Application-Id': Parse.getAppId(),
    //                 'X-Parse-REST-API-Key': Parse.getRestApiKey(),
    //                 'X-Parse-Revocable-Session': 1,
    //                 'Content-Type': 'application/json'
    //             };
    //         }
    //     }
    // });

    app.factory('User', function($http) {
        var url = 'https://api.parse.com/1/users'
        return {
            create: function(data) {
                return $http.post(url, data, { headers: getHeaders() });
            },
            get: function(id) {
                return $http.get(url + '/' + id, { headers: getHeaders() });
            }
        }
    });

    app.factory('Hackathon', function($http) {
        var url = 'https://api.parse.com/1/hackathon'
        return {
            create: function(data) {
                return $http.post(url, data, { headers: getHeaders() });
            },
            get: function(id) {
                return $http.get(url + '/' + id, { headers: getHeaders() });
            }
        }
    });

    app.factory('TeamLink', function($http) {
        var url = 'https://api.parse.com/1/teamlink'
        return {
            create: function(data) {
                return $http.post(url, data, { headers: getHeaders() });
            },
            get: function(id) {
                return $http.get(url + '/' + id, { headers: getHeaders() });
            }
        }
    });

    app.factory('Productivity', function($http) {
        var url = 'https://api.parse.com/1/productivity'
        return {
            create: function(data) {
                return $http.post(url, data, { headers: getHeaders() });
            },
            get: function(id) {
                return $http.get(url + '/' + id, { headers: getHeaders() });
            }
        }
    });


// REST API from Parse Events
// app.factory ('Mouse', ['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
//
//   return{
//     getAll: function(){
//       return $http.get('https://api.parse.com/1/classes/Mouse',{
//                 headers:{
//                     'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//                     'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//                 }
//             });
//
//     },
//     create: function(data){
//        return $http.post('https://api.parse.com/1/classes/Mouse',data,{
//                 headers:{
//                     'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
//                     'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
//                     'Content-Type':'application/json'
//                 }
//             });
//     }
// }]);
})();
