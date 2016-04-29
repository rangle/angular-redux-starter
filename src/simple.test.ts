'use strict';

// Load Chai's expect library for assertions.
import {expect} from 'chai';

describe('Simple Math Test', () => {
  it('2*2 should equal 4', () => {
    let x = 2 * 2;
    let y = 4;
    // Assert that x is defined.
    expect(x).to.not.be.undefined;
    // Assert that x equals to specific value.
    expect(x).to.equal(4);
    // Assert that x equals to y.
    expect(x).to.equal(y);
    // See http://chaijs.com/api/bdd/ for more assertion options.
  });
});
