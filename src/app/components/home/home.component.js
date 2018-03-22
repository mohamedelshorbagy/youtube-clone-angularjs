'use strict';

angular.module('HomeModule')
    .component('appHome', {
        template: '<p>{{ $ctrl.text }}</p><p>{{ $ctrl.name }}</p>',
        controllerAs: 'homeController',
        controller: function (VideoDetails, Search, $scope) {

        }
    })