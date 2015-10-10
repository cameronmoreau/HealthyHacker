(function() {
	'use strict';

	var input = require('./../data');

	var app = angular.module('controller.hackathon', ['chart.js']);

	app.controller('DashboardController', function($scope, Productivity, $interval) {
		$scope.productivityLevel = [[]];
		$scope.datetime = [];
	  $scope.series = ['TAMUHack'];
  		var tempData = [];

  		$interval(function() {
			tempData.push(input.getMouse());
		}, 50);

		$interval(function() {
			 var score = input.getScore(tempData);
			 score = Math.abs(score - 10);
			 $scope.productivityLevel[0].push(score);
			var d = new Date().getTime();
			$scope.datetime.push(d);


			console.log($scope.productivityLevel);
			tempData = [];
		}, 5000);


	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };

	  $scope.breaks = [
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
	  ]
	});

})();
