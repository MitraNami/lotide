//flatten gets a nested array and returns an un-nested array
//flatten function only handles one level of nesting

const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      output = output.concat(element);
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;