



const verifyNumber = (n) => {
    if(n === undefined) throw new Error('The number is required')   
    if(typeof n !== 'number') throw new Error('The number is required')
    if(n < 1) throw new Error('The number is required')
    return true
}

//************************

describe("verifyNumber", () => {
  test("should throw an error if the number is undefined", () => {
    expect(() => {
      verifyNumber();
    }).toThrow("The number is required");
  });

  test("should throw an error if the number is not a number", () => {
    expect(() => {
      verifyNumber("abc");
    }).toThrow("The number is required");
  });

  test("should throw an error if the number is less than 1", () => {
    expect(() => {
      verifyNumber(0);
    }).toThrow("The number is required");
  });
  test("should return true if the number is valid", () => {
    expect(verifyNumber(10)).toBe(true);
  });
});
