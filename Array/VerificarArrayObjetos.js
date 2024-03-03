





//Crear una funcion que verifique que la entrada es un array de objetos




const isArrayOfObjects = (array) => {
  if (array === undefined) throw new Error("array is required");
  if (array.length === 0) return false;
  if (Array.isArray(array)) {
    return array.every(
      (element) => typeof element === "object" && !Array.isArray(element)
    );
  }
  return false;
};

module.exports = { isArrayOfObjects };








//*************************************************



const { isArrayOfObjects } = require('./app');

describe('isArrayOfObjects', () => {
  it('should return true if the input is an array of objects', () => {
    const input = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
    const result = isArrayOfObjects(input);
    expect(result).toBe(true);
  });

  it('should return false if the input is not an array', () => {
    const input = 'not an array';
    const result = isArrayOfObjects(input);
    expect(result).toBe(false);
  });

  it('should return false if the input is an empty array', () => {
    const input = [];
    const result = isArrayOfObjects(input);
    expect(result).toBe(false);
  });

  it('should return false if the input array contains non-object elements', () => {
    const input = [1, 'two', true];
    const result = isArrayOfObjects(input);
    expect(result).toBe(false);
  });

  it('should return false if the input array contains nested arrays', () => {
    const input = [{ name: 'John', age: 25 }, [1, 2, 3]];
    const result = isArrayOfObjects(input);
    expect(result).toBe(false);
  });
});
