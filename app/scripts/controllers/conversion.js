'use strict';

/**
 * @ngdoc function
 * @name runningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the runningApp
 */
angular.module('runningApp')
  .controller('ConversionCtrl', function ($scope) {
    $scope.calculAllure = function (vitesse) {
      $scope.allure = 60 / vitesse;
    };

    $scope.calculVitesse = function (allure) {
      $scope.vitesse = 60 / allure;
    };

    $scope.vitesse = 10;
    $scope.allure = 6;
  });
