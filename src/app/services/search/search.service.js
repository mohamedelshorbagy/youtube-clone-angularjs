'use strict';



angular.module('SearchModule')
    .factory('Search', function ($http) {
        var baseUrl = 'https://www.googleapis.com/youtube/v3/search';
        var apiKey = 'AIzaSyAFoq3vF1oF-v0qDm6XmWS7-h7kQB8Gpk8';
        let Search = {};
        Search.getSearchedText = function (search = "") {
            var options = {
                maxResults: '25',
                part: 'snippet, id',
                q: search,
                type: 'video',
                key: apiKey
            };
            return $http({
                method: 'get',
                url: baseUrl,
                params: options
            });
        }

        return Search;
    })