'use strict';



angular.module('SearchPageModule')
    .component('appSearchPage', {
        templateUrl: 'src/app/components/search-page/search-page.component.html',
        controllerAs: 'searchPageController',
        controller: function (Search, $state, $stateParams, $scope) {
            $scope.search = $stateParams.search;
            $scope.data = {};
            $scope.nextPageToken = '';
            $scope.prevPageToken = '';
            $scope.totalResults;
            console.log($stateParams.search);
            Search.getSearchedText($scope.search).then(res => {
                $scope.data = res.data;
                console.log(res);
                $scope.nextPageToken = res.nextPageToken;
                $scope.prevTokenPage = res.prevPageToken;
                $scope.totalResults = res.data.pageInfo.totalResults;
            });

            // For Get Data For Specific Video
            // var id = 'JytucbU3Sas';
            // VideoDetails.getVideoDetails(id).then(res => {
            //     console.log('Video', res);
            // });

        }
    })