'use strict';

var durationFilter = angular.module('timeFormateur.filter', []);

durationFilter
.filter('decimalToTimeFormateur', function() {
    return function(minutesDecimal) {

        var integerPart = Math.floor(minutesDecimal);
        var decimalPart = minutesDecimal % 1;

        var decimalPart = decimalPart * 100;
        var seconds = Math.round(decimalPart * 60 / 100);

        var timeString = integerPart + ":";
        timeString += (seconds < 10) ? ("0" + seconds) : (seconds);
        return timeString;
    }
})
.filter('timetoDecimalFormateur', function() {
    return function(time) {
        var timeToArray = time.split(':');

        var integerPart = timeToArray[0].length !=  0 ? parseInt(timeToArray[0]) : 0;
        var decimalPart = timeToArray.length > 1 && timeToArray[1].length !=  0  ? parseInt(timeToArray[1]) : 0;

        decimalPart = Math.round(decimalPart * 100 / 60)

        var minutesDecimal = integerPart;
        minutesDecimal += decimalPart / 100;

        return minutesDecimal;
    }
});


