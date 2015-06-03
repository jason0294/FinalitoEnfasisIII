'use strict';

describe('Service: creador', function () {

  // load the service's module
  beforeEach(module('finalitoApp'));

  // instantiate service
  var creador;
  beforeEach(inject(function (_creador_) {
    creador = _creador_;
  }));

  it('should do something', function () {
    expect(!!creador).toBe(true);
  });

});
