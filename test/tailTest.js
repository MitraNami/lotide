const assert = require('chai').assert;
const tail = require("../tail");


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] when passed ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] when passed [12]", () => {
    assert.deepEqual(tail([12]), []);
  });

  it("returns [] when passed []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should not change the array passed to it", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
  
});