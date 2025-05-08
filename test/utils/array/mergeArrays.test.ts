import { mergeArrays } from 'src';
import { describe, it, expect } from 'vitest';

describe('mergeArrays', () => {
    it('should return a single array with a message when one array is provided', () => {
        const result = mergeArrays([1, 2, 3]);
        expect(result.array).toEqual([1, 2, 3]);
        expect(result.message).toBe('Single array provided');
    });

    it('should merge multiple arrays', () => {
        const result = mergeArrays([1, 2], [3, 4], [5, 6]);
        expect(result.array).toEqual([1, 2, 3, 4, 5, 6]);
        expect(result.message).toBe('Merged successfully');
    });

    it('should return an empty array with a message when all arrays are empty', () => {
        const result = mergeArrays([], [], []);
        expect(result.array).toEqual([]);
        expect(result.message).toBe('Empty arrays');
    });
});
