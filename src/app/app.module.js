'use strict';



angular.module('youtubeClone', [
    // UI Router Configuration
    'ui.router',
    // Components
    'HomeModule',
    'NavbarModule',
    'YoutubeLogoModule',
    'VideoCardModule',
    'SearchPageModule',
    'VideoDetailsModule',
    'ChannelDetailsModule',
    // Services
    'SearchModule',
    'VideoDetailsService',
    'ChannelServiceModule'
]);