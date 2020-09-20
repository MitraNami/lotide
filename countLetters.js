//when passed a string returns an object that has each element as key
//and its count as value

const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (!results[letter]) {
      results[letter] = 0;
    }
    results[letter] += 1;
    
  }
  return results;
};

module.exports = countLetters;
