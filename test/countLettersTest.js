const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {

  it("returns {'h': 1, 'e': 1, 'l': 2, 'o': 1} when passed 'hello'", () => {
    const result = countLetters("hello");
    assert.deepEqual(result, {'h': 1, 'e': 1, 'l': 2, 'o': 1});
  });

  it("returns {} when passed ''", () => {
    const result = countLetters('');
    assert.deepEqual(result, {});
  });

});