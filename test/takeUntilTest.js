const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe("#takeUntil", () => {

  it("returns [1, 2, 5, 7, 2] when passed the array [1, 2, 5, 7, 2, -1, 2, 4, 5] and " +
    "the callback  x => x < 0", () => {
    const result = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });

  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] when passed the array " +
    ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"].toString() +
    "and the callback x => x === ','", () => {

    const result = takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been",
      "to", "Redwood"], x => x === ',');
    assert.deepEqual(result, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});