'use strict';


angular.module('NavbarModule')
    .component('appNavbar' , {
        templateUrl: 'src/app/components/navbar/navbar.component.html',
        controllerAs: 'NavbarController',
        controller: function($scope) {
            $scope.toggled = false;
            $scope.toggleNavbar = function() {
                $scope.toggled = !$scope.toggled;
            }
        }
    })