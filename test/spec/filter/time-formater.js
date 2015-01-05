'use strict';

describe('filter', function () {

  // load the filter's module
  beforeEach(module('timeFormateur.filter'));


  describe('timeFormateur', function() {

    it('should convert decimal values to minutes:seconds',
      inject(function(timeFormateurFilter) {
        expect(timeFormateurFilter(0)).toBe('0:00'); // 0,0 min => 0:00
        expect(timeFormateurFilter(0.0)).toBe('0:00'); // 0,0 min => 0:00
        expect(timeFormateurFilter(1)).toBe('1:00'); // 1,0 min => 1:00
        expect(timeFormateurFilter(1.5)).toBe('1:30'); // 1,5 min => 1:30
        expect(timeFormateurFilter(5.25)).toBe('5:15'); // 5,25 min => 5:15
        expect(timeFormateurFilter(5.26)).toBe('5:16'); // 5,26 min => 5:16 (arrondi mathematique)
    }));
  });

});
