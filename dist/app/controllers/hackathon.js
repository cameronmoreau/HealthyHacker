(function() {
    'use strict';

    var app = angular.module('controller.hackathon', ['chart.js']);

    app.controller('DashboardController', function($scope, $uibModal, $log) {
        $scope.datetime = ["10/10/2015 14:00", "10/10/2015 14:30", "10/10/2015 15:00", "10/10/2015 15:30",
            "10/10/2015 16:00", "10/10/2015 16:30", "10/10/2015 17:00"
        ];
        $scope.series = ['Productivity', 'sdfdsf'];
        $scope.productivityLevel = [
            [65, 59, 80, 81, 56, 55, 40]
        ];
        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };
          $scope.items = ['item1', 'item2', 'item3'];

          $scope.animationsEnabled = true;
          $scope.open = function (size) {
            console.log('hi');

            var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'myModalContent.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });

            modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
          };

          $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
          };



        $scope.breaks = [{
            time: '10 min',
            title: 'Stand up and stretch',
            description: 'This is a test description for stand up and stretch.'
        }, {
            time: '1 hour',
            title: 'Take a nap',
            description: 'This is a test description for take a nap.'
        }, {
            time: '2 hours 20 min',
            title: 'Stand up and stretch',
            description: 'This is a test description for stand up and stretch.'
        }, {
            time: '3 hours',
            title: 'Stand up and stretch',
            description: 'This is a test description for stand up and stretch.'
        }]
    });

	app.controller('TeamController', function($scope) {

	});

	app.controller('SettingsController', function($scope) {

	});

	app.controller('EventController', function($scope) {

	});
})();

