





//create a function that verify if an array contains only integers or array of integers
// Time Complexity: O(n)


/**
 * Checks if an array contains only integers or nested arrays of integers.
 *
 * @param {Array} arr - The array to be checked.
 * @throws {Error} If the array is undefined, not an array, or empty.
 * @throws {Error} If the array contains non-integer values.
 * @returns {boolean} Returns true if the array contains only integers or nested arrays of integers.
 */


const isArrayOfIntegers = (arr) => {
    if (arr === undefined) {
        throw new Error('Array is required');
    }
    if (!Array.isArray(arr)) {
        throw new Error('Array is required');
    }
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }
    for (const item of arr) {
        if (Array.isArray(item)) {
        if (!isArrayOfIntegers(item)) {
            throw new Error('Array must contain only numbers');
        }
    } else if (!Number.isInteger(item)) {
        throw new Error('Array must contain only numbers');
    }
}
    return true;
}




//***********************************


describe('isArrayOfIntegers', () => {
  test('should return true for an array of integers', () => {
    expect(isArrayOfIntegers([1, 2, 3])).toBe(true);
  });

  test('should return true for an array of nested arrays of integers', () => {
    expect(isArrayOfIntegers([[1], [2, 3], [4, [5, 6]]])).toBe(true);
  });

  test('should throw an error for an undefined array', () => {
    expect(() => {
      isArrayOfIntegers();
    }).toThrow('Array is required');
  });

  test('should throw an error for a non-array value', () => {
    expect(() => {
      isArrayOfIntegers('not an array');
    }).toThrow('Array is required');
  });

  test('should throw an error for an empty array', () => {
    expect(() => {
      isArrayOfIntegers([]);
    }).toThrow('Array is empty');
  });

  test('should throw an error for an array containing non-integer values', () => {
    expect(() => {
      isArrayOfIntegers([1, '2', [3]]);
    }).toThrow('Array must contain only numbers');
  });
});
