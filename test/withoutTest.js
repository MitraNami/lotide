const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] when passed [1, 2, 3], [1]", () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });

  it("returns [1, 3] when passed [1, 'hi', 2, 3], [2, '3', 'hi']", () => {
    const result = without([1, 'hi', 2, 3], [2, '3', 'hi']);
    assert.deepEqual(result, [1, 3]);
  });

  it("returns [1, 2, 3] when passed [1, 2, 3], [10, 0]", () => {
    const result = without([1, 2, 3], [10, 0]);
    assert.deepEqual(result, [1, 2, 3]);
  });

  it("returns [] when passed [1, 2, 3], [1, 2, 3]", () => {
    const result = without([1, 2, 3], [1, 2, 3]);
    assert.deepEqual(result, []);
  });

  it("the original array will not be modified", () => {
    const originalArray = [1, 2, 3, 4];
    without(originalArray, [2, 4]);
    assert.deepEqual(originalArray, [1, 2, 3, 4]);
  });
});