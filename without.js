// contains function returns true if the array has the item, false otherwise
const contains = function(array , item) {
  for (let element of array) {
    if (element === item) {
      return true;
    }
  }
  return false;
};

//without function returns a subset of a given array,removing unwanted elements
const without = function(source, itemsToRemove) {
  const subset = [];
  for (let element of source) {
    if (!contains(itemsToRemove, element)) {
      subset.push(element);
    }
  }
  return subset;
};


module.exports = without;