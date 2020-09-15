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

//assertArraysEqual takes in two arrays and console.log an appropriate message
const assertArraysEqual = function(actualArray, expectedArray) {
  const greenTick = String.fromCodePoint(0x2705);
  const redCross = String.fromCodePoint(0x274C);
  let output;
  if (eqArrays(actualArray, expectedArray)) {
    output = `${greenTick}Assertion Passed: ${actualArray} === ${expectedArray}`;
  } else {
    output = `${redCross}Assertion Failed: ${actualArray} !== ${expectedArray}`;
  }
  console.log(output);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1]);
assertArraysEqual([1, 2, 3], [1, 'hi', 3]);
assertArraysEqual([], []);