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
    $scope.allure = '6:00';


    $scope.distance = 20;
    $scope.competitions = [
        {'competition' : '10 km' ,'distance' : 10},
        {'competition' : '20 km' ,'distance' : 20},
        {'competition' : 'semi-marathon (21.1 km)','distance' : 21.1},
        {'competition' : 'marathon (42.195 km)', 'distance' : 42.195},
        {'competition' : '100 bornes', 'distance' : 100},
        {'competition' : '100 miles (160.93 km)', 'distance' : 160.93}
    ]
    $scope.kms = [5,10,15,20];

    $scope.generateKmTable = function(distance, eachKm) {
        $scope.kms = [];
        var increment = 5;
        if (eachKm) {
            increment = 1;
        }
        for (var i = increment; i < $scope.distance; i = i+increment) {
            $scope.kms.push(i);
        }
        $scope.kms.push(distance);
    };

    $scope.calculTemps = function(km) {
        return km * $filter('timetoDecimalFormateur')($scope.allure);
    };

  });
