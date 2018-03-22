'use strict';

angular.module('youtubeClone')
    .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/search/');
        // $locationProvider.html5Mode(true);

        $stateProvider
            .state('main' , {
                url: '/',
                template: '<app-search-page></app-search-page>'
            })
            .state('searchPage', {
                url: '/search/:search',
                component: 'appSearchPage'
            })
            .state('videoPage', {
                url: '/video/:id',
                component: 'appVideo'
            })
            .state('channelPage',{
                url: '/channel/:id',
                component: 'appChannel'
            })
            .state('not-found', {
                url: '/not-found',
                template: '<p class="text-center">404</p>'
            })

    });