



/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(typeof str !== 'string') throw new Error('Not a string');
}


//Create a function thar returns all posible permutations of a string using recursion


const permutations = (string) => {
    verifyString(string);
    if(string.length === 0) return [''];
    const firstChar = string[0];
    const restOfString = string.slice(1);
    const words = permutations(restOfString);
    const permutationsArray = [];
    for (let word of words) {
        for (let i = 0; i <= word.length; i++) {
            const permutation = word.slice(0, i) + firstChar + word.slice(i);
            permutationsArray.push(permutation);
        }
    }
    return permutationsArray;
}

module.exports = { verifyString, permutations };


console.log(permutations('abc'));

//*************************************************


const { verifyString, permutations } = require('./app');

describe('verifyString', () => {
  test('should throw an error if the string is undefined', () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow('Undefined string');
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => {
      verifyString(123);
    }).toThrow('Not a string');
  });

  test('should not throw an error if the string is valid', () => {
    expect(() => {
      verifyString('hello');
    }).not.toThrow();
  });
});

describe('permutations', () => {
  test('should return an array of all possible permutations of a string', () => {
    expect(permutations('abc')).toEqual(['abc', 'bac', 'bca', 'acb', 'cab', 'cba']);
  });

  test('should return an array with an empty string if the input string is empty', () => {
    expect(permutations('')).toEqual(['']);
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => {
      permutations(123);
    }).toThrow('Not a string');
  });
});


