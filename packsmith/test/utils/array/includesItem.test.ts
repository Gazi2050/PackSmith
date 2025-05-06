import { includesItem } from "src";
import { describe, expect, it } from "vitest";

const arr = [1, 2, 3, 4, 5]
describe('includesItem', () => {
    it('return true if item exist', () => {
        expect(includesItem(arr, 3)).toBe(true)
    });
    it('return false if item not exist', () => {
        expect(includesItem(arr, 9)).toBe(false)
    });
})