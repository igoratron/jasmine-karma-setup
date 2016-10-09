const test = require('../js/test');

describe('Some test', () => {
  it('is a function', () => {
    expect(test).toEqual(jasmine.any(Function));
  });
});
