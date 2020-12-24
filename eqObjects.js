const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get false
const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      //both values are arrays
      if (!eqArrays(value1, value2)) {
        return false
      }
    } else {
      //assuming values are primitives if they're not arrays
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};


module.exports = eqObjects;
