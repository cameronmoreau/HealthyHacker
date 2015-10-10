

var app = angular.module('controller.auth', []);

app.controller('LoginController', function($scope) {
	
	
	console.log('hi');
	$scope.user={
		email:'',
		password:''
	}

	$scope.login = function(){
		console.log($scope.user.email);
		console.log($scope.user.password);
	}

});

