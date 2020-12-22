//letterPositions takes a string as arguments and returns an object
//whose keys are the letters and values the indexes of letters in the string

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
