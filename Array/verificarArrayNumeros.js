

const isArrayOfIntegers = (arr) => {
    if(arr === undefined) throw new Error('Array is required');
    if(!Array.isArray(arr)) throw new Error('Array is required');
    if(arr.length === 0) throw new Error('Array is empty');
    if(arr.some((element) => {
        return typeof element !== 'number';
    })) throw new Error('Array must contain only numbers');
    return true;
}

//*******************************************************************


describe('isArrayOfIntegers', () => {
  test('should return true if the array contains only integers', () => {
    expect(isArrayOfIntegers([1, 2, 3])).toBe(true);
  });

  test('should throw an error if the array is undefined', () => {
    expect(() => {
      isArrayOfIntegers();
    }).toThrow('Array is required');
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => {
      isArrayOfIntegers('not an array');
    }).toThrow('Array is required');
  });

  test('should throw an error if the array is empty', () => {
    expect(() => {
      isArrayOfIntegers([]);
    }).toThrow('Array is empty');
  });

  test('should throw an error if the array contains non-integer elements', () => {
    expect(() => {
      isArrayOfIntegers([1, 2, '3']);
    }).toThrow('Array must contain only numbers');
  });
});
