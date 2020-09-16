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


// Test Code

//Primitives as values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

//Arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

