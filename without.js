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


// contains function returns true if the array has the item, false otherwise
const contains = function(array , item) {
  for (let element of array) {
    if (element === item) {
      return true;
    }
  }
  return false;
};

//without function returns a subset of a given array,removing unwanted elements
const without = function(source, itemsToRemove) {
  const subset = [];
  for (let element of source) {
    if (!contains(itemsToRemove, element)) {
      subset.push(element);
    }
  }
  return subset;
};

//Test Code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 'hi', 2, 3], [2, '3', 'hi']), [1, 3]);
assertArraysEqual(without([1, 2, 3], [10, 0]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);

//Test the origianl array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);