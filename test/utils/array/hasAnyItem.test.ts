import { hasAnyItem } from "src";
import { describe, expect, it } from "vitest";

describe('hasAnyItem', () => {
    it('returns true if any item exists in both arrays', () => {
        expect(hasAnyItem([1, 2, 3], [3, 9])).toBe(true);
    });

    it('returns false if no items exist in both arrays', () => {
        expect(hasAnyItem([1, 2, 3], [4, 5])).toBe(false);
    });
});
