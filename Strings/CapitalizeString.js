






/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty, or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 * @throws {Error} If the input string is undefined or not a string.
 */

const capitalize = (str) => {
    verifyString(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalizes each word in a phrase.
 * @param {string} phrase - The input phrase.
 * @returns {string} The capitalized phrase.
 * @throws {Error} If the input phrase is undefined or not a string.
 */


const capitalizePhrase = (phrase) => {
    verifyString(phrase);
    return phrase.split(' ').map(capitalize).join(' ');
}

module.exports = { capitalizePhrase }




//**************************************************






const {capitalizePhrase} = require('./app');


describe('capitalizePhrase', () => {

    test('should capitalize the first letter of each word in a phrase', () => {
        const input = 'the quick brown fox';
        const expected = 'The Quick Brown Fox';
        const result = capitalizePhrase(input);
        expect(result).toBe(expected);
    });

    test('should throw an error if the input is not a string', () => {
        expect(() => capitalizePhrase(123)).toThrow('Not a string');
    });
    test('should throw an error if the input is not a string', () => {
        expect(() => capitalizePhrase({})).toThrow('Not a string');
    });
    test('should throw an error if the input is not a string', () => {
        expect(() => capitalizePhrase([])).toThrow('Not a string');
    });
    test('should throw an error if the input is not a string', () => {
        expect(() => capitalizePhrase(null)).toThrow('Not a string');
    });

    test('should throw an error if the input is undefined', () => {
        expect(() => capitalizePhrase()).toThrow('Undefined string');
    });

    test('should return an empty string if the input is an empty string', () => {
        expect(() => capitalizePhrase('')).toThrow('Empty string')
    });

    test('should capitalize the first letter of a single word', () => {
        const input = 'hello';
        const expected = 'Hello';
        const result = capitalizePhrase(input);
        expect(result).toBe(expected);
    });

    test('should capitalize the first letter of a single word in a phrase', () => {
        const input = 'hello world';
        const expected = 'Hello World';
        const result = capitalizePhrase(input);
        expect(result).toBe(expected);
    });

});


