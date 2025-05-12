import { calculate } from 'src';
import { describe, it, expect } from 'vitest';

describe('calculate', () => {
    it('adds multiple numbers', () => {
        expect(calculate('add', 1, 2, 3)).toEqual({ result: 6, type: 'add' });
    });

    it('subtracts numbers in order', () => {
        expect(calculate('subtract', 10, 3, 2)).toEqual({ result: 5, type: 'subtract' });
    });

    it('multiplies numbers', () => {
        expect(calculate('multiply', 2, 3, 4)).toEqual({ result: 24, type: 'multiply' });
    });

    it('divides numbers', () => {
        expect(calculate('divide', 100, 2, 5)).toEqual({ result: 10, type: 'divide' });
    });

    it('calculates modulo', () => {
        expect(calculate('mod', 10, 3)).toEqual({ result: 1, type: 'mod' });
    });

    it('throws on division by zero', () => {
        expect(() => calculate('divide', 10, 0)).toThrow('Division by zero');
    });

    it('throws on modulo by zero', () => {
        expect(() => calculate('mod', 10, 0)).toThrow('Modulo by zero');
    });

    it('throws if fewer than two numbers are given', () => {
        expect(() => calculate('add', 5)).toThrow('At least two numbers are required');
    });
});
