







/**
 * Calculates the power of a number.
 *
 * @param {number} n - The base number.
 * @param {number} p - The exponent.
 * @returns {number} The result of raising the base to the power of the exponent.
 * @throws {Error} If the base or exponent is not provided or not a number, or if the exponent is -1.
 */


const power = (n, p) => {
    if(n === undefined) throw new Error('The number is required')   
    if(p === undefined) throw new Error('The power is required')
    if(typeof n !== 'number') throw new Error('arg1 (base) must be a number')
    if(typeof p !== 'number') throw new Error('arg2 (exp) must be a number')
    if(p < 0) throw new Error('Power must to be bigger than 0') 
    const base = parseInt(n)
    const exp = parseInt(p)
    if (exp === 0) {
        return 1
    }
    return base * power(base, exp - 1)
}


module.exports = power





//***********************************************

const power = require('./app');

test('Calculates the power of a number', () => {
  expect(power(2, 3)).toBe(8);
  expect(power(5, 0)).toBe(1);
  expect(power(10, 2)).toBe(100);
  expect(power(2, 10)).toBe(1024);
  expect(power(-2, 7)).toBe(-128);
});

test('Throws an error if the base or exponent is not provided', () => {
  expect(() => power()).toThrow('The number is required');
  expect(() => power(2)).toThrow('The power is required');
});

test('Throws an error if the base or exponent is not a number', () => {
  expect(() => power('2', 3)).toThrow('arg1 (base) must be a number');
  expect(() => power(2, '3')).toThrow('arg2 (exp) must be a number');
});

test('Throws an error if the exponent is -1', () => {
  expect(() => power(2, -1)).toThrow('Power must to be bigger than 0');
});
test('Throws an error if the exponent is -10', () => {
  expect(() => power(2, -10)).toThrow('Power must to be bigger than 0');
});
test('Throws an error if the exponent is -100', () => {
  expect(() => power(2, -100)).toThrow('Power must to be bigger than 0');
});

test('Throws an error if one argument is an empty array', () => {
    expect(() => power([])).toThrow('The power is required');
    expect(() => power([], 3)).toThrow('arg1 (base) must be a number');
    expect(() => power(2, [])).toThrow('arg2 (exp) must be a number');
    expect(() => power({})).toThrow('The power is required');
    expect(() => power({}, 3)).toThrow('arg1 (base) must be a number');
    expect(() => power(2, {})).toThrow('arg2 (exp) must be a number');

});

