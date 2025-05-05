import { addUniqueItem } from "src";
import { describe, expect, it } from "vitest";

const arr = [1, 2, 3, 4, 5]
describe('addUniqueItem', () => {
    it('returns "item added" if item not exist', () => {
        expect(addUniqueItem(arr, 6)).toBe('item added');
        expect(addUniqueItem(arr, 'str')).toBe('item added');
        expect(addUniqueItem(arr, [])).toBe('item added');
        expect(addUniqueItem(arr, {})).toBe('item added');

    });
    it('returns "item already exist" if item is exist', () => {
        expect(addUniqueItem(arr, 5)).toBe('item already exist');
    })
})