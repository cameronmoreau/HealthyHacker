		

var app = angular.module('controller.auth', []);

app.controller('LoginController', function($scope) {
	
	var myEl = angular.element( document.querySelector( '#passwordField' ) );

	
	$scope.user={
		email:'',
		password:''
	}



	$scope.login = function(){
		console.log($scope.user.email);
		console.log($scope.user.password);
	}
	$scope.check = function(){
		console.log($scope.user.password.length);
		console.log($scope.user.email);

		if($scope.user.email && $scope.user.password.length>0){
			//validation code here
		}
	}

});

