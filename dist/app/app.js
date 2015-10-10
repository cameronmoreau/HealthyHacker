(function() {
    'use strict';

    var app = angular.module('HealthyHacker', [
        'ui.router',
        'controller.home'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				abstract: true,
				url: '/main',
				templateUrl: './base/home-sidebar.html',
				controller: function($scope, $state) {
					$scope.$state = $state;
				}
			})

            .state('hackathon', {
                abstract: true,
                url: '/hackathon',
                templateUrl: './base/hackathon-sidebar.html',
                controller: function($scope, $state) {
                    $scope.$state = $state;
                }
            })

            .state('main.home', {
				url: '/home',
				templateUrl: './home/projects.html',
				controller: 'ProjectsController'
			})

			.state('hackathon.dashboard', {
				url: '/dashboard',
				templateUrl: './hackathon/dashboard.html',
				controller: 'DashboardController'
			});

			// .state('main.apps', {
			// 	url: '/apps',
			// 	templateUrl: './main/apps.html',
			// 	controller: 'AppsController'
			// })
            //
			// .state('main.account', {
			// 	url: '/acount',
			// 	templateUrl: './main/account.html'
			// })
            //
			// .state('main.settings', {
			// 	url: '/settings',
			// 	templateUrl: './main/settings.html'
			// })
            //
			// .state('project.detail', {
			// 	url: '/detail',
			// 	templateUrl: './project/detail.html'
			// })
            //
			// .state('project.category', {
			// 	url: '/category',
			// 	templateUrl: './project/category.html',
			// 	controller: 'CategoryController'
			// })
            //
			// .state('project.edit-endpoint', {
			// 	url: '/edit-endpoint',
			// 	templateUrl: './project/edit-endpoint.html',
			// 	controller: 'EditEndpointController'
			// });

		$urlRouterProvider.otherwise('/main/home');
	});
})();
