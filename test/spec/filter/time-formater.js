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

});
