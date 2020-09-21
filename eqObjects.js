
const eqArrays = require('./eqArrays');


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


module.exports = eqObjects;