'use strict';


angular.module('VideoDetailsModule')
    .factory('VideoDetails', function ($http) {
        var apiKey = 'AIzaSyAFoq3vF1oF-v0qDm6XmWS7-h7kQB8Gpk8';
        let VideoDetails = {};
        VideoDetails.getVideoDetails = function (id) {
            let opts = {
                'id': id,
                'part': 'snippet,contentDetails,statistics',
                'key': apiKey
            }
            return $http({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/videos',
                params: opts
            });
        }

        return VideoDetails;
    });