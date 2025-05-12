import { describe, it, expect } from 'vitest';
import { average } from 'src';

describe('average', () => {
    it('returns the average of numbers', () => {
        expect(average([2, 4, 6])).toBe(4);
    });

    it('works with decimals', () => {
        expect(average([1.5, 2.5, 3])).toBeCloseTo(2.3333333333333335);
    });

    it('throws on empty array', () => {
        expect(() => average([])).toThrow('Array must not be empty');
    });
});
