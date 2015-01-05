'use strict';

/**
 * @ngdoc function
 * @name runningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the runningApp
 */
angular.module('runningApp')
  .controller('ConversionCtrl', function ($scope, $filter) {
    $scope.calculAllure = function (vitesse) {
      var allureDecimale = 60 / vitesse;
      //$filter('timeFormateur')(allureDecimale);
      $scope.allure = $filter('timeFormateur')(allureDecimale);
    };

    $scope.calculVitesse = function (allure) {
      $scope.vitesse = 60 / allure;
    };

    $scope.vitesse = 10;
    $scope.allure = 6;
  });
