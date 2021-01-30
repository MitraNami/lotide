//Given two arrays return true if the arrays are equal otherwise false

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    const value1 = array1[i];
    const value2 = array2[i];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      //if the values are not arrays assume they are primitives
      if (value1 !== value2) {
        return false;
      }
    }
    
  }
  return true;
};


// const result1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
// console.log(result1);

// const result2 = eqArrays([[2, 3], [4, [5, 6, ['hi']]]], [[2, 3], [4, [5, 6, ['hi']]]]); // => true
// console.log(result2);

// const result3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
// console.log(result3);

module.exports = eqArrays;
