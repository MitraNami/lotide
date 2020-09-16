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


const findKeyByValue = function(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined; // just to clarify, we don't really need this
};


//Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's show"), undefined);
