'use strict';

/**
 * @ngdoc function
 * @name runningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the runningApp
 */
angular.module('runningApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
