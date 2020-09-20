const assert = require("chai").assert;
const middle = require("../middle");


describe("#middle", () => {
  it("returns [2] when passed [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] when passed [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [] when passed ['hi', 'bye']", () => {
    assert.deepEqual(middle(['hi', 'bye']), []);
  });

  it("returns [] when passed [2]", () => {
    assert.deepEqual(middle([2]), []);
  });
});




