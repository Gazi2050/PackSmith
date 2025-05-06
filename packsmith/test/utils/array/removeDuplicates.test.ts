import { describe, it, expect } from 'vitest';
import { removeDuplicates } from 'src';

describe('removeDuplicates', () => {
    it('removes number duplicates', () => {
        expect(removeDuplicates([1, 2, 2, 3])).toEqual({
            value: [1, 2, 3],
            message: 'duplicate removed',
        });
    });

    it('no duplicate in number array', () => {
        expect(removeDuplicates([1, 2, 3])).toEqual({
            value: [1, 2, 3],
            message: 'no duplicate found',
        });
    });

    it('removes string duplicates', () => {
        expect(removeDuplicates(['a', 'b', 'a'])).toEqual({
            value: ['a', 'b'],
            message: 'duplicate removed',
        });
    });

    it('no duplicate in string array', () => {
        expect(removeDuplicates(['x', 'y', 'z'])).toEqual({
            value: ['x', 'y', 'z'],
            message: 'no duplicate found',
        });
    });

    it('same object reference is duplicate', () => {
        const obj = { id: 1 };
        expect(removeDuplicates([obj, obj])).toEqual({
            value: [obj],
            message: 'duplicate removed',
        });
    });

    it('different object instances are not duplicates', () => {
        const a = { id: 1 };
        const b = { id: 1 };
        expect(removeDuplicates([a, b])).toEqual({
            value: [a, b],
            message: 'no duplicate found',
        });
    });
});
