(function() {
    'use strict';

    var app = angular.module('controller.hackathon', ['chart.js']);

    app.controller('DashboardController', function($scope) {
        $scope.datetime = ["10/10/2015 14:00", "10/10/2015 14:30", "10/10/2015 15:00", "10/10/2015 15:30",
            "10/10/2015 16:00", "10/10/2015 16:30", "10/10/2015 17:00"
        ];
        $scope.series = ['TAMUHack', 'sdfdsf'];
        $scope.productivityLevel = [
            [65, 59, 80, 81, 56, 55, 40]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };

        $scope.breaks = [{
            time: '10 min',
            title: 'Stand up and stretch',
            description: 'This is a test description for stand up and stretch.'
        }, {
            time: '1 hour',
            title: 'Take a nap',
            description: 'This is a test description for take a nap.'
        }, {
            time: '2 hours 20 min',
            title: 'Stand up and stretch',
            description: 'This is a test description for stand up and stretch.'
        }, {
            time: '3 hours',
            title: 'Stand up and stretch',
            description: 'This is a test description for stand up and stretch.'
        }]
    });

	app.controller('TeamController', function($scope) {

	});

	app.controller('SettingsController', function($scope) {

	});

	app.controller('EventController', function($scope) {

	});

})();
