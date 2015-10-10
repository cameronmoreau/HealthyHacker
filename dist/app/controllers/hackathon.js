(function() {
	'use strict';

	var input = require('./../data');

	var app = angular.module('controller.hackathon', ['chart.js']);

	app.controller('DashboardController', function($scope, Productivity, $interval) {
	// 	$scope.datetime = ["10/10/2015 14:00", "10/10/2015 14:30", "10/10/2015 15:00", "10/10/2015 15:30",
	// 	 "10/10/2015 16:00", "10/10/2015 16:30", "10/10/2015 17:00", "fdsfds", "fdsfds", "fdsfds", "fdsfds", "fdsfds", "fdsfds",
    //  "fdsfds", "fdsfds", "fdsfds", "fdsfds", "fdsfds"];
		$scope.productivityLevel = [[]];
		$scope.datetime = [];
	  $scope.series = ['TAMUHack'];
	  //$scope.productivityLevel = [Productivity.getProductivity()];
  //   $interval(function () {
  //   //$scope.productivityLevel = [Productivity.changeProductivity()];
  // }, 3000);
  		var tempData = [];

  		$interval(function() {
			tempData.push(input.getMouse());
		}, 50);

		$interval(function() {
			 var score = input.getScore(tempData);
			 score = Math.abs(score - 10);
			 $scope.productivityLevel[0].push(score);
			// if($scope.productivityLevel.length == 0) {
			// 	$scope.productivityLevel.push(score);
			// 	$scope.productivityLevel = [$scope.productivityLevel];
			// } else {
			// 	$scope.productivityLevel.push(score);
			// }
			// $scope.productivityLevel = [$scope.productivityLevel];
			// $scope.productivityLevel.push(score);
			// $scope.productivityLevel = [].concat.apply([],$scope.productivityLevel);
			// $scope.productivityLevel = [$scope.productivityLevel];
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
