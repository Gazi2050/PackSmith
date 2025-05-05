import { addUniqueItem } from "src";
import { describe, expect, it } from "vitest";

describe('addUniqueItem', () => {
    it('adds item if not present', () => {
        const arr = [1, 2];
        expect(addUniqueItem(arr, 3)).toEqual({ array: [1, 2, 3], message: 'item added' });
    });

    it('returns already exist if item is present', () => {
        const arr = [1, 2];
        expect(addUniqueItem(arr, 2)).toEqual({ array: [1, 2], message: 'item already exist' });
    });

    it('handles reference types', () => {
        const obj = {};
        const arr = [obj];
        expect(addUniqueItem(arr, obj)).toEqual({ array: [obj], message: 'item already exist' });

        const another = {};
        expect(addUniqueItem(arr, another)).toEqual({ array: [obj, another], message: 'item added' });
    });
});
