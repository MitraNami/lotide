//when passed a string returns an object that has each element as key
//and its count as value

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = 0;
      }
      result[letter] += 1;
    }
  }
  return result;
};

module.exports = countLetters;
