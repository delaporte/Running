'use strict';

describe('Controller: ConversionCtrl', function () {

  // load the controller's module
  beforeEach(module('runningApp'));

  var ConversionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConversionCtrl = $controller('ConversionCtrl', {
      $scope: scope
    });
  }));

  it('should init vitesse to 10 km/h', function () {
    expect(scope.vitesse).toBe(10);
  });

  it('should init allure to 6 min/km', function () {
    expect(scope.allure).toBe(6);
  });
});
