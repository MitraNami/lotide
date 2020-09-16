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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};


// Test Code
const result = letterPositions("hello");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);
