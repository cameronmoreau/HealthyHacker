(function() {
	'use strict';

	var app = angular.module('controller.auth', []);

	app.controller('LoginController', function($scope, Auth) {


		console.log('hi');
		$scope.user={
			email:'',
			password:''
		}

		$scope.login = function() {
			Auth.login($scope.user.email, $scope.user.password);
			//console.log($scope.user.email);
			//console.log($scope.user.password);
		}

	});

})();
