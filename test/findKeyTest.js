const assert = require("chai").assert;
const findKey = require("../findKey");


describe("#findKey", () => {

  it("returns 'noma' when given arr and callback x => x.stars === 2 ", () => {
    const arr = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const result = findKey(arr, x => x.stars === 2);
    assert.strictEqual(result, 'noma');
  });

  it("returns undefined when none of the values satisfy the callback", () => {
    const arr = {
      "Victoria": { area: "West", stars: 4 },
      "Kingston": { area: "East", stars: 5 },
    };
    const result = findKey(arr, x => x.stars > 4 && x.area === "West");
    assert.strictEqual(result, undefined);
  });

});



