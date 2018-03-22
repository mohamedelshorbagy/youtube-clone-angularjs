'use strict';

angular.module('VideoDetailsModule')
    .component('appVideo', {
        templateUrl: 'src/app/components/video-details/video-details.component.html',
        controller: function (Search, VideoDetails, $state, $stateParams, $scope, $sce, $timeout) {
            $scope.id = $stateParams.id;
            $scope.data;
            $scope.related = [];
            $scope.youtubeLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.id);
            $scope.limit = 7;
            $scope.spinning = false;
            $scope.nextPageToken = '';
            VideoDetails.getVideoDetails($scope.id).then(res => {
                console.log(res);
                $scope.data = res.data.items[0];
                console.log($scope.data);
            }).catch(error => {
                console.log(error);
            })
            $scope.getSearched = function () {
                Search.getSearchedText($scope.search, $scope.nextPageToken).then(res => {
                    $scope.spinning = true;
                    if (res['status'] === 200) {
                        $scope.related = $scope.related.concat(res.data.items);
                        $scope.nextPageToken = res.data.nextPageToken;
                        $scope.spinning = false;
                    }
                });
            }
            $scope.getSearched();
            $scope.transformNumber = function (number) {
                let digits = 1;
                let num = Number(number);
                var si = [
                    { value: 1, symbol: "" },
                    { value: 1E3, symbol: "k" },
                    { value: 1E6, symbol: "M" },
                    { value: 1E9, symbol: "G" },
                    { value: 1E12, symbol: "T" },
                    { value: 1E15, symbol: "P" },
                    { value: 1E18, symbol: "E" }
                ];
                var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
                var i;
                for (i = si.length - 1; i > 0; i--) {
                    if (num >= si[i].value) {
                        break;
                    }
                }
                return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
            }
            $scope.transformDate = function (date) {
                let allDate = new Date(date).toUTCString();
                let newDate = allDate.substring(allDate.indexOf(',') + 2, allDate.indexOf(':') - 3)
                return newDate;
            }

            $scope.loadMore = function () {
                var vm = $scope;
                $scope.spinning = true;
                $timeout(function () {
                    let incremented = vm.limit + 3;
                    vm.limit = incremented > vm.related.length ? vm.related.length : incremented;
                    if (vm.limit === vm.related.length) {
                        vm.getSearched();
                        vm.limit += 3;
                    }
                    vm.spinning = false;
                }, 1000);
            }
            $scope.goToChannelPage = function (id) {
                $state.go('channelPage', { id: id });
            }



        }
    })