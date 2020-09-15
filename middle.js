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


const middle = function(array) {
  const output = [];
  const length = array.length;
  if (length % 2 === 0 && length !== 2) {
    output.push(array[length / 2 - 1]);
  }
  if (length !== 1 && length !== 2) {
    output.push(array[Math.floor(length / 2)]);
  }
  return output;
};

//Test code
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, "hi", 3, 4]), ["hi"]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([2]), []);