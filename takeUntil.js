//takeUntil will keep collecting items from a provided array until the callback
//provided returns a truthy value.

const takeUntil = function(array, callback) {
  let cutoffIndex;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      cutoffIndex = i;
      break;
    }
  }
  return array.slice(0, cutoffIndex);
};


module.exports = takeUntil;