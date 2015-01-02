'use strict';

/**
 * @ngdoc overview
 * @name runningApp
 * @description
 * # runningApp
 *
 * Main module of the application.
 */
angular
  .module('runningApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/conversion', {
        templateUrl: 'views/conversion.html',
        controller: 'ConversionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
