(function() {
	'use strict';

	var app = angular.module('controller.hackathon', ['chart.js']);

	app.controller('DashboardController', function($scope) {
		$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	  $scope.series = ['Series A', 'Series B'];
	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };

	  $scope.breaks = {
	  	{
	  		time: '10 min',
	  		title: 'Stand up and stretch',
	  		description: 'This is a test description for stand up and stretch.'
	  	},
	  	{
	  		time: '1 hour',
	  		title: 'Take a nap',
	  		description: 'This is a test description for take a nap.'
	  	},
	  	{
	  		time: '2 hours 20 min',
	  		title: 'Stand up and stretch',
	  		description: 'This is a test description for stand up and stretch.'
	  	},
	  	{
	  		time: '3 hours',
	  		title: 'Stand up and stretch',
	  		description: 'This is a test description for stand up and stretch.'
	  	}
	  }
	});

})();
