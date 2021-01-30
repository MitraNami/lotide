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
        return false;
      }
    } else if ((typeof value1 === 'object' && value1 !== null) && (typeof value1 === 'object' && value1 !== null)) {
      //each value's type is object and it's not null or an array
      if (!eqObjects(value1, value2)) {
        return false;
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


// const result1 = eqObjects({ a: { y: {x: 0, w: 1}, z: [2, 3] }, b: 2 }, { a: { y: {x: 0, w: 1}, z: [2, 3] }, b: 2 }); // => true
// console.log(result1);

// const result2 = eqObjects({ a: { y: {x: 0, w: 1}, z: [2, 3] }, b: 2 }, { a: { y: {x: 2, w: 1}, z: [2, 3] }, b: 2 }); // => false
// console.log(result2);

// const result3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
// console.log(result3);


module.exports = eqObjects;
