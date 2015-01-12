'use strict';

describe('filter', function () {

  // load the filter's module
  beforeEach(module('timeFormateur.filter'));


  describe('test decimalToTimeFormateurFilter', function() {

    it('should convert decimal values to minutes:seconds',
      inject(function(decimalToTimeFormateurFilter) {
        expect(decimalToTimeFormateurFilter(0)).toBe('0:00'); // 0,0 min => 0:00
        expect(decimalToTimeFormateurFilter(0.0)).toBe('0:00'); // 0,0 min => 0:00
        expect(decimalToTimeFormateurFilter(1)).toBe('1:00'); // 1,0 min => 1:00
        expect(decimalToTimeFormateurFilter(1.5)).toBe('1:30'); // 1,5 min => 1:30
        expect(decimalToTimeFormateurFilter(5.25)).toBe('5:15'); // 5,25 min => 5:15
        expect(decimalToTimeFormateurFilter(5.26)).toBe('5:16'); // 5,26 min => 5:16 (arrondi mathematique)

        expect(decimalToTimeFormateurFilter(65.5)).toBe('1h05:30'); // 90 min => 1h30:00 (arrondi mathematique)
        expect(decimalToTimeFormateurFilter(90)).toBe('1h30:00'); // 90 min => 1h30:00 (arrondi mathematique)
    }));
  });

  describe('test timetoDecimalFormateur', function() {

    it('should convert decimal values to minutes:seconds',
      inject(function(timetoDecimalFormateurFilter) {
        expect(timetoDecimalFormateurFilter('0:00')).toBe(0); // 0,0 min => 0:00
        expect(timetoDecimalFormateurFilter('1:00')).toBe(1); // 1,0 min => 1:00
        expect(timetoDecimalFormateurFilter('1:30')).toBe(1.5); // 1,5 min => 1:30
        expect(timetoDecimalFormateurFilter('5:15')).toBe(5.25); // 5,25 min => 5:15
        expect(timetoDecimalFormateurFilter('5:16')).toBe(5.27); // 5,27 min => 5:16 (arrondi mathematique)
        expect(timetoDecimalFormateurFilter('6')).toBe(6);
        expect(timetoDecimalFormateurFilter('6:')).toBe(6);
        expect(timetoDecimalFormateurFilter('')).toBe(0);
    }));
  });

  describe('test stringToTimeFormateur', function() {

    it('should convert string values to time in seconds',
      inject(function(stringToTimeFormateurFilter) {
        expect(stringToTimeFormateurFilter('1h')).toBe(3600);
        expect(stringToTimeFormateurFilter('1h01')).toBe(3660);
        expect(stringToTimeFormateurFilter('1h02min')).toBe(3720);
        expect(stringToTimeFormateurFilter('1h01min30')).toBe(3690);
        expect(stringToTimeFormateurFilter('31min')).toBe(1860);
        expect(stringToTimeFormateurFilter('32min43')).toBe(1963);
        expect(stringToTimeFormateurFilter('32min43sec')).toBe(1963);
        expect(stringToTimeFormateurFilter('')).toBe(0);
        expect(stringToTimeFormateurFilter('1')).toBe(3600);
    }));
  });

});
