//findKey takes in an object and a callback. It should scan the object and return the
//first key for which the callback returns a truthy value. If no key is found, then it
//should return undefined.

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined; //not necessary
};


module.exports = findKey;
