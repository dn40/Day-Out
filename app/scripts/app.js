'use strict';

/**
 * @ngdoc overview
 * @name dayOutApp
 * @description
 * # dayOutApp
 *
 * Main module of the application.
 */
 // / script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var dayOutapp = angular.module('dayOutapp', ['ngRoute']);

    // configure our routes
    dayOutapp.config(function($routeProvider) {
        $routeProvider

            .when('/beaches', {
                templateUrl : 'views/beaches.html',
                controller  : 'BeachesListCtrl'
            })

            .when('/restaurants', {
                templateUrl : 'views/restaurants.html',
                controller  : 'RestaurantsListCtrl'
            })

            .when('/attractions', {
                templateUrl : 'views/attractions.html',
                controller  : 'AttractionsListCtrl'
            })

            .when('/events', {
                templateUrl : 'views/events.html',
                controller  : 'EventsListCtrl'
            })

            .when('/nightlife', {
                templateUrl : 'views/nightlife.html',
                controller  : 'NightlifeListCtrl'
            })

            // route for the contact page
            .when('/', {
                templateUrl : 'index.html',
                controller  : ''
            });
    });

    