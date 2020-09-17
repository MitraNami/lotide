/////////////////////
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
//////////////////////////////////////

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test code
const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);

const deserts = ["icecream", "chocolate"];
const result2 = map(deserts, food => `I love ${food} for desert!`);
assertArraysEqual(result2,["I love icecream for desert!", "I love chocolate for desert!"]);

const bills = [50, 100];
const stringBills = map(bills, bill => bill.toString());
assertArraysEqual(stringBills, ['50', '100']);
