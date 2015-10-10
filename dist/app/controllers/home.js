(function() {
    'use strict';

    var app = angular.module('controller.home', []);

    app.controller('ProjectsController', function($scope) {
        $scope.projects = [
			{
				name: 'TAMU Hack',
				team: 4
			},
			{
				name: 'HackDFW',
				team: 4
			},
			{
				name: 'MITHack',
				team: 4
			},
        ];

    });

})();
