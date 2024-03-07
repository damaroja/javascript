


/**
 * Verifies if a given number is valid.
 *
 * @param {number} n - The number to be verified.
 * @returns {boolean} - Returns true if the number is valid.
 * @throws {Error} - Throws an error if the number is undefined, not a number, or less than 1.
 */


const verifyNumber = (n) => {
    if(n === undefined) throw new Error('The number is required')   
    if(typeof n !== 'number') throw new Error('Argument must be a number')
    return true
}

/**
 * Returns an array of numbers within a given range.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} - An array of numbers within the range (inclusive).
 */


const range = (start, end) => {
    if(!verifyNumber(start) || !verifyNumber(end)) return
    start = parseInt(start)
    end = parseInt(end)
    if(start === end) return [start]
    return [start, ...range(start + 1, end)]
}

module.exports = range


//********************************


const range = require('./app');

describe('range', () => {
  it('should return an array of numbers within the range (inclusive)', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });

  it('should return an array with a single number if start and end are the same', () => {
    expect(range(1, 1)).toEqual([1]);
    expect(range(0, 0)).toEqual([0]);
    expect(range(-5, -5)).toEqual([-5]);
  });

  it('should throw an error if start or end is not a valid number', () => {
    expect(() => range('1', 5)).toThrow('Argument must be a number');
    expect(() => range(1, '5')).toThrow('Argument must be a number');
    expect(() => range(null, 5)).toThrow('Argument must be a number');
    expect(() => range(1, undefined)).toThrow('The number is required');
    expect(() => range(1)).toThrow('The number is required');
    expect(() => range({})).toThrow('Argument must be a number');
    expect(() => range([])).toThrow('Argument must be a number');
});  });

