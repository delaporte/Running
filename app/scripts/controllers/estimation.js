'use strict';

/**
 * @ngdoc function
 * @name runningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the runningApp
 */
angular.module('runningApp')
  .controller('EstimationCtrl', function ($scope, $filter) {

    $scope.calculVma = function (chrono, distance) {
      var chronoSec = $filter('stringToTimeFormateur')(chrono);
      var vitesse = distance / chronoSec * 3600;
      angular.forEach(pourcentageVma, function(pourcentageItem) {
        if (pourcentageItem.duree < chronoSec) {
            $scope.vma = vitesse / pourcentageItem.vma;
            $scope.pourcentage = pourcentageItem.vma * 100;
        }
      });

    };

    $scope.distance = 20;
    $scope.competitions = [
        {'competition' : '10 km' ,'distance' : 10},
        {'competition' : '20 km' ,'distance' : 20},
        {'competition' : 'semi-marathon (21.1 km)','distance' : 21.1},
        {'competition' : 'marathon (42.195 km)', 'distance' : 42.195},
        {'competition' : '100 bornes', 'distance' : 100},
        {'competition' : '100 miles (160.93 km)', 'distance' : 160.93}
    ];

    var pourcentageVma = [
        {'duree' : 1800, 'vma' : 0.93 }, //inf 30 min
        {'duree' : 2700, 'vma' : 0.87 }, //inf 45 min
        {'duree' : 3600, 'vma' : 0.85 }, //inf 60 min
        {'duree' : 5400, 'vma' : 0.80 }, //inf 90 min
        {'duree' : 7200, 'vma' : 0.80 }, //inf 120 min
        {'duree' : 9000, 'vma' : 0.78 }, //inf 150 min
        {'duree' : 10800, 'vma' : 0.76 }, //inf 180 min
        {'duree' : 12600, 'vma' : 0.75 }, //inf 210 min
        {'duree' : 999999999, 'vma' : 0.70 }, //sup 210 min
    ];

  });
