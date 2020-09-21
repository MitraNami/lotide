const eqObjects = require('./eqObjects');


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


module.exports = assertObjectsEqual;