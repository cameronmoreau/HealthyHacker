(function() {
    'use strict';
    var app = angular.module('service.productivity', []);

    app.factory('Productivity', function() {
        var pData = [];

        return {
            addProductivity: function(data) {
                pData.append(data);
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
