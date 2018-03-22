'use strict';



angular.module('ChannelDetailsModule')
    .component('appChannel', {
        templateUrl: 'src/app/components/channel-details/channel-details.component.html',
        controller: function (channelService, $state, $stateParams, $scope) {
            $scope.id = $stateParams.id;
            channelService.getChannelDetails($scope.id).then(res => {
                console.log(res);
            })
        }
    })