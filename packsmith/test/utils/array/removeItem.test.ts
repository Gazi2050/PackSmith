import { removeItem } from "src";
import { describe, expect, it } from "vitest";
const arr = [1, 2, 3, 4, 5]
describe('removeItem', () => {
    it('remove item if item is present', () => {
        const result1 = { array: [1, 2, 3, 4], message: 'item removed' }
        expect(removeItem(arr, 5)).toEqual(result1)
    })
})