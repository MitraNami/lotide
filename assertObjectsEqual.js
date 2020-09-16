const eqArrays = function(array1, array2) {
  let equality = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        equality = false;
        break;
      }
    }
  } else {
    equality = false;
  }
  return equality;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let equality = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //both values are arrays
        if (!eqArrays(object1[key], object2[key])) {
          equality = false;
          break;
        }
      } else {
        //assuming values are primitives if they're not arrays
        if (object1[key] !== object2[key]) {
          equality = false;
          break;
        }
      }
    }
  } else {
    equality = false;
  }
  return equality;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const greenTick = String.fromCodePoint(0x2705);
  const redCross = String.fromCodePoint(0x274C);
  let output;
  if (eqObjects(actual, expected)) {
    output = `${greenTick}Assertion passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    output = `${redCross}Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(output);
};

//Test code

assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectsEqual({names: ['John', 'Dan'], class: 12}, {names: ['John','Dan']});