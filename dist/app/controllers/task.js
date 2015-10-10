(function() {
	'use strict';

	var app = angular.module('controller.task', []);

	app.controller('TaskController', function($scope,Task) {
		var score = 5;
	
		if(score >= 0 && score <=2)
			$scope.task = Task.getTask("bad")[0];
		else if (score >2 && score <7)
			$scope.task = Task.getTask("ok")[0];
		else
			$scope.task = Task.getTask("good")[0];
		console.log($scope.task);
		var quotes = [
		'Sitting 6+ hours a day makes you up to <b> 40% likelier to die within 15 years ',
		'You should try to get 30 minutes of intense exercise at least 3 times a week',
		'just do it'];

		console.log(Math.random()*2)
		var ran = Math.floor(Math.random()*(3-0))
		console.log(ran);
		console.log(quotes[ran]);

		$scope.quote = quotes[ran];

		$scope.labels = ["Target Goal", "Amount Done", "Amount To Do "];
  		$scope.data = [1000, 600,400];


	});
})();