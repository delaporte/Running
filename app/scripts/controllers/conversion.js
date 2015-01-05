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
      $scope.allure = $filter('decimalToTimeFormateur')(allureDecimale);
    };

    $scope.calculVitesse = function (allure) {
      var allureDecimale = $filter('timetoDecimalFormateur')(allure);
      $scope.vitesse = 60 / allureDecimale;
    };

    $scope.vitesse = 10;
    $scope.allure = 6;
  });
