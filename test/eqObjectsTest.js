
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("#eqObjects", () => {

  it('returns true when passed { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it('returns true when passed { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });
  
  it('returns false when passe { c: "1", d: ["2", 3, 4] } and { c: "1", d: ["2", 3] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });

});
