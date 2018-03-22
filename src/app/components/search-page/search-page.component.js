'use strict';



angular.module('SearchPageModule')
    .component('appSearchPage', {
        templateUrl: 'src/app/components/search-page/search-page.component.html',
        controllerAs: 'searchPageController',
        controller: function (VideoDetails, Search, $state, $stateParams, $scope, $timeout) {
            $scope.search = $stateParams.search;
            $scope.nextPageToken = '';
            $scope.totalResults;
            $scope.limit = 7;
            $scope.items = [];
            $scope.spinning = false;
            $scope.getSearched = function () {
                Search.getSearchedText($scope.search, $scope.nextPageToken).then(res => {
                    $scope.spinning = true;
                    if (res['status'] === 200) {
                        $scope.items = $scope.items.concat(res.data.items);
                        $scope.nextPageToken = res.data.nextPageToken;
                        $scope.totalResults = res.data.pageInfo.totalResults;
                        $scope.spinning = false;
                    }
                });
            }
            $scope.getSearched();
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
                $timeout(function () {
                    let incremented = vm.limit + 3;
                    vm.limit = incremented > vm.items.length ? vm.items.length : incremented;
                    if (vm.limit === vm.items.length) {
                        vm.getSearched();
                        vm.limit += 3;
                    }
                    vm.spinning = false;
                }, 1000);
            }
            $scope.goToVideo = function (id) {
                $state.go('videoPage', { id: id });
            }

        }
    })