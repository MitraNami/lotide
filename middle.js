//takes an array and returns an array containing the middle element if
//the original array has odd number of elements or an array containing the two
//midle elements if the array has even number of elements

const middle = function(array) {
  const length = array.length;
  const midd = [];
  if (length === 1 || length === 2) {
    return midd;
  }
  const middleIndex = Math.floor(length / 2);
  midd.push(array[middleIndex]);
  if (length % 2 === 0) {
    const index = middleIndex - 1;
    midd.unshift(array[index]);
  }
  return midd;
};


module.exports = middle;
