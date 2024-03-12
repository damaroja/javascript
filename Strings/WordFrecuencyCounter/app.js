

/**
 * Counts the frequency of words in a string.
 * @param {string} str - The input string.
 * @returns {Map<string, number>} - A Map object where the keys are words and the values are their frequencies.
 */

//Create a function that counts words frecuency in a string using map with less complexity

const countWords = (str) => {
  const words = str.split(" ");
  const wordsCount = new Map();
  words.forEach((word) => {
    const wordCount = wordsCount.get(word) || 0;
    wordsCount.set(word, wordCount + 1);
  });
  return wordsCount;
};

module.exports = countWords;

//Modo de uso
/* console.log(
  countWords(
    "I have a cat named Meow and a dog named Woof. I love the dog a lot.He is larger than a small horse."
  )
); */
