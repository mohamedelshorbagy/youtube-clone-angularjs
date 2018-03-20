'use strict';

angular.module('HomeModule')
    .component('appHome', {
        templateUrl: 'src/app/components/home/home.component.html',
        controllerAs: 'homeController',
        controller: function ($scope, $http) {
            $scope.title = "Welcome Home Page";
            $http.get('https://jsonplaceholder.typicode.com/photos').then(function (response) {
                $scope.photos = response.data;
                console.log(response.data);
            });
        }
    })