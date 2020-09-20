// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output;
  const greenTick = String.fromCodePoint(0x2705);
  const redCross = String.fromCodePoint(0x274C);
  if (actual === expected) {
    output = `${greenTick}Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `${redCross} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(output);
};


module.exports = assertEqual;