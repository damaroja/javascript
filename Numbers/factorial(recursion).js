







const factorial = (n) =>{
    if(n === undefined) throw new Error('n is required');
    if(typeof n !== 'number') throw new Error('n should be a number');
    if(n < 0) throw new Error('n should be a positive number');
    if(n === 0) return 1;
    return n * factorial(n-1);
}

module.exports = factorial;


//----------------------------------------------------


const factorial = require('./app');

describe('factorial', () => {
    it('should throw an error if n is not a number', () => {
        expect(() => factorial('abc')).toThrow('n should be a number');
    });

    it('should throw an error if n is undefined', () => {
        expect(() => factorial()).toThrow('n is required');
    });

    it('should throw an error if n is a negative number', () => {
        expect(() => factorial(-5)).toThrow('n should be a positive number');
    });

    it('should return 1 when n is 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 1 when n is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should return 2 when n is 2', () => {
        expect(factorial(2)).toBe(2);
    });

    it('should return 6 when n is 3', () => {
        expect(factorial(3)).toBe(6);
    });

    it('should return 24 when n is 4', () => {
        expect(factorial(4)).toBe(24);
    });

    it('should return 120 when n is 5', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should return 720 when n is 6', () => {
        expect(factorial(6)).toBe(720);
    });

    it('should return 5040 when n is 7', () => {
        expect(factorial(7)).toBe(5040);
    });

    it('should return 40320 when n is 8', () => {
        expect(factorial(8)).toBe(40320);
    });

    it('should return 362880 when n is 9', () => {
        expect(factorial(9)).toBe(362880);
    });

    it('should return 3628800 when n is 10', () => {
        expect(factorial(10)).toBe(3628800);
    });
})
