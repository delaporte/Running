'use strict';

var durationFilter = angular.module('timeFormateur.filter', []);

durationFilter.filter('timeFormateur', function() {
    return function(minutesDecimal) {

        var integerPart = Math.floor(minutesDecimal);
        var decimalPart = minutesDecimal % 1;

        var decimalPart = decimalPart * 100;
        var seconds = Math.ceil(decimalPart * 60 / 100);

        var timeString = integerPart + ":";
        timeString += (seconds < 10) ? ("0" + seconds) : (seconds);
        return timeString;
    }
});


