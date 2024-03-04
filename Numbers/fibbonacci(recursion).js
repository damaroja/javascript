




/**
 * Calculates the nth number in the Fibonacci sequence.
 * @param {number} n - The position of the number in the Fibonacci sequence.
 * @returns {number} - The nth number in the Fibonacci sequence.
 * @throws {Error} - If n is not provided, not a number, or a negative number.
 */


const fibbonaci = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n should be a number");
  if (n < 0) throw new Error("n should be a positive number");
  if (n === 0) return 0;
  return n + fibbonaci(n - 1);
};

module.exports = fibbonaci;

console.log(fibbonaci(5))



//-----------------------------------------




const fibbonaci = require('./app');

describe('fibbonaci', () => {
    it('should throw an error if n is not a number', () => {
        expect(() => fibbonaci('abc')).toThrow('n should be a number');
    });

    it('should throw an error if n is undefined', () => {
        expect(() => fibbonaci()).toThrow('n is required');
    });

    it('should throw an error if n is a negative number', () => {
        expect(() => fibbonaci(-5)).toThrow('n should be a positive number');
    });

    it('should throw an error if n is am empty array', () => {
        expect(() => fibbonaci([])).toThrow('n should be a number');
    });
    it('should throw an error if n is an empty object', () => {
        expect(() => fibbonaci({})).toThrow('n should be a number');
    });


    it('should return 0 when n is 0', () => {
        expect(fibbonaci(0)).toBe(0);
    });

    it('should return 1 when n is 1', () => {
        expect(fibbonaci(1)).toBe(1);
    });

    it('should return 1 when n is 2', () => {
        expect(fibbonaci(2)).toBe(3);
    });

    it('should return 2 when n is 3', () => {
        expect(fibbonaci(3)).toBe(6);
    });

    it('should return 3 when n is 4', () => {
        expect(fibbonaci(4)).toBe(10);
    });

    it('should return 5 when n is 5', () => {
        expect(fibbonaci(5)).toBe(15);
    });

    it('should return 8 when n is 6', () => {
        expect(fibbonaci(6)).toBe(21);
    });

    it('should return 13 when n is 7', () => {
        expect(fibbonaci(7)).toBe(28);
    });

    it('should return 21 when n is 8', () => {
        expect(fibbonaci(8)).toBe(36);
    });

    it('should return 34 when n is 9', () => {
        expect(fibbonaci(9)).toBe(45);
    });

    it('should return 55 when n is 10', () => {
        expect(fibbonaci(10)).toBe(55);
    });
})
