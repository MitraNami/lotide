/////////////
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
/////////////////

//findKey takes in an object and a callback. It should scan the object and return the
//first key for which the callback returns a truthy value. If no key is found, then it
//should return undefined.

const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined; //not necessary
};


// Test Code
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(result1, "noma");

console.log("---");

const result2 = findKey({
  "Victoria": { area: "West", stars: 4 },
  "Kingston": { area: "East", stars: 5 },
  "Ottawa":   { area: "East", stars: 4 },
}, x => x.stars > 3 && x.area === "East");
assertEqual(result2, "Kingston");

console.log("---");

const result3 = findKey({
  "Victoria": { area: "West", stars: 4 },
  "Kingston": { area: "East", stars: 5 },
}, x => x.stars > 4 && x.area === "West");
assertEqual(result3, undefined);