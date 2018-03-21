'use strict';

angular.module('HomeModule')
    .component('appHome', {
        templateUrl: 'src/app/components/home/home.component.html',
        controllerAs: 'homeController',
        controller: function (VideoDetails, Search, $scope, $http) {
            $scope.title = "Welcome Home Page";
            $scope.apiKey = 'AIzaSyAFoq3vF1oF-v0qDm6XmWS7-h7kQB8Gpk8';
            $scope.data = {};
            $scope.search = '';
            $scope.getSearched = function () {
                console.log($scope);
                Search.getSearchedText($scope.search).then(res => {
                    console.log(res);
                    $scope.data['items'] = res.data.items;
                    $scope.data['status'] = res.status;
                    console.log($scope.data)
                });
            }

            var id = 'JytucbU3Sas';
            VideoDetails.getVideoDetails(id).then(res => {
                console.log('Video', res);
            });

            $scope.testLiveServer = "Test For Live Server";
        }
    })