(function() {
    'use strict';

    var app = angular.module('HealthyHacker', [
        'ui.router',
        'controller.home', 'controller.auth', 'controller.hackathon', 'controller.task',
        'service.parse', 'service.auth', 'service.task', 'service.productivity',
        'service.hackathon'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                abstract: true,
                url: '/main',
                templateUrl: './base/home-sidebar.html',
                controller: function($scope, $state) {
                    $scope.$state = $state;

                    $scope.settingDisplay = 'none';

                    $scope.toggleSettingDisplay = function() {
                      console.log('Clicked........!!!');
                      if($scope.settingDisplay == 'none')
                      {
                        $scope.settingDisplay = 'block';
                      }
                      else {
                        $scope.settingDisplay = 'none';
                      }
                    };
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

        .state('main.settings', {
            url: '/settings',
            templateUrl: './home/settings.html',
            controller: 'SettingsController'
        })

        .state('hackathon.dashboard', {
            url: '/dashboard/',
            templateUrl: './hackathon/dashboard.html',
            controller: 'DashboardController'
        })

        .state('hackathon.team', {
            url: '/team',
            templateUrl: './hackathon/team.html',
            controller: 'TeamController'
        })

        .state('hackathon.settings', {
            url: '/settings',
            templateUrl: './hackathon/settings.html',
            controller: 'SettingsController'
        })

        .state('hackathon.event', {
            url: '/event',
            templateUrl: './hackathon/event.html',
            controller: 'EventController'
        })

        .state('login', {
            url: '/login',
            templateUrl: './auth/login.html',
            controller: 'LoginController'
        })

        .state('task',{
            url: '/task',
            templateUrl: './activity/task.html',
            controller:'TaskController'
        })

       .state('register',{
        url: '/register',
        templateUrl: './auth/register.html',
        controller:'LoginController'
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
