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


// REST API from Parse Events
app.factory ('Mouse', ['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){

  return{
    getAll: function(){
      return $http.get('https://api.parse.com/1/classes/Mouse',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });

    },
    create: function(data){
       return $http.post('https://api.parse.com/1/classes/Mouse',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
    }
    // edit:function(id,data){
    //         return $http.put('https://api.parse.com/1/classes/Mouse/'+id,data,{
    //             headers:{
    //                 'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
    //                 'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
    //                 'Content-Type':'application/json'
    //             }
    //         });
    //     }
  }
}]);










})();
