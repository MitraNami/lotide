//takes an array and returns an array containing the middle element if 
//the original array has odd number of elements or an array containing the two
//midle elements if the array has even number of elements

const middle = function(array) {
  const output = [];
  const length = array.length;
  if (length % 2 === 0 && length !== 2) {
    output.push(array[length / 2 - 1]);
  }
  if (length !== 1 && length !== 2) {
    output.push(array[Math.floor(length / 2)]);
  }
  return output;
};


module.exports = middle;