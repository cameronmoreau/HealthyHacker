(function() {
    'use strict';
    var app = angular.module('service.productivity', []);

    app.factory('Productivity', function() {
        var pData = [];

        return {
            addProductivity: function(time, data) {
                pData.append({ time: time, data: data });
            },
            getProductivity: function() {
                return pData;
            },
            getProductivityAmount: function() {
                return pData.length;
            }
        }
    });

})();
