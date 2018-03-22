'use strict';


angular.module('ChannelServiceModule')
    .factory('channelService', function ($http) {
        let ChannelService = {};
        var baseUrl = 'https://www.googleapis.com/youtube/v3/channels';
        var apiKey = 'AIzaSyAFoq3vF1oF-v0qDm6XmWS7-h7kQB8Gpk8';
        ChannelService.getChannelDetails = function (id) {
            let opts = {
                id: id,
                part: 'snippet,contentDetails,statistics',
                key: apiKey
            }
            return $http({
                method: 'get',
                url: baseUrl,
                params: opts
            });
        }

        return ChannelService;
    });