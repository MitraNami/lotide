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

const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter] += 1;
    }
  }
  return results;
};

// Test Code
const result1 = countLetters('hello');
assertEqual(result1['h'], 1);
assertEqual(result1['l'], 2);
assertEqual(result1['w'], undefined);

const result2 = countLetters('');
assertEqual(result2['m'], undefined);
