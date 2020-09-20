const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm'] when passed ['ground', 'control', 'to', 'major']" +
  "and word => word[0]", () => {
    const result = map(['ground', 'control', 'to', 'major'], word => word[0]);
    assert.deepEqual(result, ['g', 'c', 't', 'm']);
  });

  it("returns ['50', '100'] when passed [50, 100] and bill => bill.toString()", () => {
    const result = map([50, 100], bill => bill.toString());
    assert.deepEqual(result, ['50', '100']);
  });

});

