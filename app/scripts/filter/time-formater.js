'use strict';

var durationFilter = angular.module('timeFormateur.filter', []);

durationFilter
.filter('decimalToTimeFormateur', function() {
    return function(minutesDecimal) {
        var timeString = '';

        var integerPart = Math.floor(minutesDecimal);
        if (integerPart > 59) {
            var hours = Math.floor(integerPart / 60);
            var minutes = integerPart % 60;
            timeString += hours + 'h';
            timeString += minutes < 10 ? ('0' + minutes) : (minutes);
            timeString += ':';
        } else {
            timeString += integerPart + ':';
        }

        var decimalPart = (minutesDecimal % 1) * 100;
        //var decimalPart = decimalPart * 100;
        var seconds = Math.round(decimalPart * 60 / 100);
        timeString += (seconds < 10) ? ('0' + seconds) : (seconds);
        return timeString;
    };
})
.filter('timetoDecimalFormateur', function() {
    return function(time) {
        var timeToArray = time.split(':');

        var integerPart = timeToArray[0].length !==  0 ? parseInt(timeToArray[0]) : 0;
        var decimalPart = timeToArray.length > 1 && timeToArray[1].length !==  0  ? parseInt(timeToArray[1]) : 0;

        decimalPart = Math.round(decimalPart * 100 / 60);

        var minutesDecimal = integerPart;
        minutesDecimal += decimalPart / 100;

        return minutesDecimal;
    };
})
.filter('stringToTimeFormateur', function() {

    var getTimeSegment = function(stringDecimal, separator) {
        var timeToArray = stringDecimal.split(separator);

        var time;
        var timeToConvert;

        if (timeToArray.length === 1) {
            if (isNaN(timeToArray[0]) || isNaN(parseInt(timeToArray[0]))) {
                time = 0;
                timeToConvert = timeToArray[0];
            } else {
                time = timeToArray[0];
                timeToConvert = '';
            }
        } else {
            time = timeToArray[0];
            timeToConvert = timeToArray[1];
        }

        time = isNaN(time) ? 0 : parseInt(time);

        return [time, timeToConvert];
    };

    return function(stringDecimal) {
        var timeToConvert = stringDecimal;
        var milliseconds = 0;

        var hours = getTimeSegment(timeToConvert, 'h');
        milliseconds += hours[0] * 3600;
        timeToConvert = hours[1];

        var minutes = getTimeSegment(timeToConvert, 'min');
        milliseconds += minutes[0] * 60;
        timeToConvert = minutes[1];

        var seconds = getTimeSegment(timeToConvert, 'sec');
        milliseconds += seconds[0];

        return milliseconds;
    };
});


