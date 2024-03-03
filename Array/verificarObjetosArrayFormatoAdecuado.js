

const isRightFormat = (array) => {
    if (array === undefined) throw new Error("array is required");
    if (array.length === 0) return false;
    let result = true;
    array.forEach((element) => {
        if (
            typeof element.name !== "string" ||
            element.name.trim() === "" ||
            element.name === undefined ||
            element.name === null ||
            typeof element.price !== "number" ||
            element.price === undefined ||
            element.price === null ||
            typeof element.quantity !== "number" ||
            element.quantity === undefined ||
            element.quantity === null ||
            element.price <= 0 ||
            element.quantity <= 0
        ) {
            result = false;
        }
    });
    return result;
};


///*******************************************************

describe('isRightFormat', () => {
  test('should return true if all objects in the array have the right format', () => {
    const input = [
      { name: 'Chocolate', price: 2.5, quantity: 5 },
      { name: 'Candy', price: 1.5, quantity: 10 },
    ];
    const result = isRightFormat(input);
    expect(result).toBe(true);
  });

  test('should return false if any object in the array does not have the right format', () => {
    const input = [
      { name: 'Chocolate', price: 2.5, quantity: 5 },
      { name: 'Candy', price: -1.5, quantity: 10 },
    ];
    const result = isRightFormat(input);
    expect(result).toBe(false);
  });

  test('should throw an error if the input array is undefined', () => {
    expect(() => {
      isRightFormat(undefined);
    }).toThrow('array is required');
  });
});
