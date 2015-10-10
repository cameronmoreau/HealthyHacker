(function() {
    'use strict';

    var app = angular.module('controller.home', ['ui.bootstrap']);

    app.controller('ProjectsController', function($scope, $uibModal) {
        $scope.projects = [{
            name: 'TAMU Hack',
            team: 4,
            date: '10/10/2015'
        }, {
            name: 'HackDFW',
            team: 4,
            date: '4/10/2015'
        }, {
            name: 'MITHack',
            team: 4,
            date: '1/10/2015'
        }, ];

        var modalInstance = null;


        $scope.openStartDateTimePicker = function($event) {
            $scope.status.startOpened = true;
        };
         $scope.openEndDateTimePicker = function($event) {
            $scope.status.endOpened = true;
        };

          $scope.status = {
            startOpened: false,
            endOpened: false
          };

        $scope.test = function(){
            console.log($scope.addProjectStartTime);
        }
        $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];




        $scope.openLoginModal = function() {
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'auth/login.html',
                controller: 'LoginController'
            });
        }

        $scope.openRegisterModal = function() {
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'auth/register.html',
                controller: 'LoginController'
            });
        }

        $scope.openAddModal = function() {
            modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'home/addProject.html',
                controller: 'ProjectsController'
            });
        }

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

        $scope.hstep = 1;
        $scope.mstep = 5;
         $scope.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            $scope.mytime = d;
          };

        $scope.cancel = function(){
            $scope.$close(null);
        }

        var time;

        $scope.addHackathon = function(){

            //console.log($scope.mytime);
            var time = $scope.mytime;
            if($scope.addProjectName&&$scope.dtStart){
                var date = $scope.dtStart;
               console.log(time.getHours()+" "+time.getMinutes())
               date.setHours(time.getHours());
               date.setMinutes(time.getMinutes());
               console.log(date)
                $scope.tempProj = {
                    name : $scope.addProjectName,
                    team : 4,
                    date : date

                };
                $scope.projects.push($scope.tempProj);
                console.log( $scope.projects);
                $scope.$close();
            }
            else{
               // alert('error');
            }
        }

        $scope.refreshList = function() {
            var items = $scope.projects;
            $scope.projects = [];
            // for(int i = 0; i < items.length; i++) {
            //
            // }
        }

    });


})();
