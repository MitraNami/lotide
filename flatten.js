//flatten gets a nested array and returns an un-nested array

// recursion: handles deep nesting of arrays
// const flatten = function(arr) {
//   let flattenedArray = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       flattenedArray = flattenedArray.concat(flatten(item));
//     }
//     else {
//       flattenedArray.push(item);
//     }
//   }
//   return flattenedArray;
// };


// only handles one level of nesting:
const flatten = function(arr) {
  let flattenedArray = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(item);
    }
    else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

// only handles one level of nesting (higher-order function):
// const flatten = function(arr) {
//   return arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       return acc.concat(item);
//     }
//     acc.push(item);
//     return acc;
//   }, []);
// };


module.exports = flatten;
