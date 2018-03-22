'use strict';

angular.module('youtubeClone')
    .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/not-found');
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
            .state('not-found', {
                url: '/not-found',
                template: '<p class="text-center">404</p>'
            })

    });