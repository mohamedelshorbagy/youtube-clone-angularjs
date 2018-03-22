'use strict';



angular.module('SearchPageModule')
    .component('appSearchPage', {
        templateUrl: 'src/app/components/search-page/search-page.component.html',
        controllerAs: 'searchPageController',
        controller: function (VideoDetails, Search, $state, $stateParams, $scope, $timeout) {
            $scope.search = $stateParams.search;
            $scope.data = {};
            $scope.nextPageToken = '';
            $scope.totalResults;
            $scope.limit = 7;
            $scope.spinning = false;
            Search.getSearchedText($scope.search).then(res => {
                $scope.spinning = true;
                if(res['status'] === 200) {
                    $scope.data = res.data;
                    $scope.nextPageToken = res.nextPageToken;
                    $scope.totalResults = res.data.pageInfo.totalResults;
                    $scope.spinning = false;
                }
            });
            $scope.transformDate = function (date) {
                let allDate = new Date(date).toUTCString();
                let newDate = allDate.substring(allDate.indexOf(',') + 2, allDate.indexOf(':') - 3)
                return newDate;
            }
            $scope.getDuration = function (id) {
                let hour, min, sec, duration;
                VideoDetails.getVideoDetails(id).then(res => {
                    let time = res['data']['items'][0]['contentDetails']['duration'];
                    if (time.indexOf('H') !== -1) {
                        hour = time.substring(time.indexOf('T') + 1, time.indexOf('H'));
                        min = time.substring(time.indexOf('H') + 1, time.indexOf('M'));
                        sec = time.substring(time.indexOf('M') + 1, time.indexOf('S'));
                        duration = hour + ":" + min + ":" + sec;
                        return duration;
                    } else if (time.indexOf('H') === -1 && time.indexOf('M') !== -1) {
                        min = time.substring(time.indexOf('T') + 1, time.indexOf('M'));
                        sec = time.substring(time.indexOf('M') + 1, time.indexOf('S'));
                        duration = min + ":" + sec;
                        return duration;
                    }
                });
            }

            $scope.loadMore = function () {
            var vm = $scope;
                $scope.spinning = true;
                $timeout(function() {
                    let incremented = vm.limit + 3;
                    vm.limit = incremented > vm.data.items.length ? vm.data.items.length : incremented;
                    vm.spinning = false;
                }, 1000);
            }

        }
    })