




/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}

//********************************************************************


const verifyString = require('./app');

test('verifyString should throw an error for undefined string', () => {
  expect(() => {
    verifyString(undefined);
  }).toThrow('Undefined string');
});

test('verifyString should throw an error for empty string', () => {
  expect(() => {
    verifyString('');
  }).toThrow('Empty string');
});

test('verifyString should throw an error for non-string input', () => {
  expect(() => {
    verifyString(123);
  }).toThrow('Not a string');
});

