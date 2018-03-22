'use strict';


angular.module('VideoCardModule')
    .component('appCardVideo', {
        templateUrl: 'src/app/components/video-card/video-card.component.html',
        controller: function ($state, $scope) {
            $scope.transformDate = function (date) {
                let allDate = new Date(date).toUTCString();
                let newDate = allDate.substring(allDate.indexOf(',') + 2, allDate.indexOf(':') - 3)
                return newDate;
            }
            $scope.goToVideo = function (id) {
                $state.go('videoPage', { id: id });
            }
            $scope.goToChannelPage = function(id) {
                $state.go('channelPage' , { id: id });
            }
        },
        bindings: {
            snippet: '<',
            item:'<'
        }
    })