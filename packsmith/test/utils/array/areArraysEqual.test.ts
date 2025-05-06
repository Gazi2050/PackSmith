import { areArraysEqual } from 'src';
import { describe, it, expect } from 'vitest';

describe('areArraysEqual', () => {
    it('returns true for two equal arrays', () => {
        const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
        expect(result).toBe(true);
    });

    it('returns false for arrays with different values', () => {
        const result = areArraysEqual([1, 2, 3], [1, 2, 4]);
        expect(result).toBe(false);
    });

    it('returns false for arrays of different lengths', () => {
        const result = areArraysEqual([1, 2], [1, 2, 3]);
        expect(result).toBe(false);
    });

    it('returns message and array for a single array input', () => {
        const result = areArraysEqual([1, 2, 3]);
        expect(result).toEqual({
            array: [1, 2, 3],
            message: 'Single array provided'
        });
    });

    it('returns message and empty array when no arrays are provided', () => {
        const result = areArraysEqual();
        expect(result).toEqual({
            array: [],
            message: 'Single array provided'
        });
    });

    it('returns true for 3 or more identical arrays', () => {
        const result = areArraysEqual([1, 2], [1, 2], [1, 2]);
        expect(result).toBe(true);
    });

    it('returns false if any one of 3+ arrays is different', () => {
        const result = areArraysEqual([1, 2], [1, 2], [2, 1]);
        expect(result).toBe(false);
    });
});
