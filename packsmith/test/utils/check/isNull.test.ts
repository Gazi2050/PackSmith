import { isNull } from "src";
import { describe, expect, it } from "vitest";

describe('isNull', () => {
    it('returns true for null', () => {
        expect(isNull(null)).toBe(true);
    });
    it('returns false for not null', () => {
        expect(isNull(NaN)).toBe(false);
        expect(isNull(undefined)).toBe(false);
        expect(isNull(123)).toBe(false);
        expect(isNull('string')).toBe(false);
        expect(isNull(true)).toBe(false);
        expect(isNull([])).toBe(false);
        expect(isNull({})).toBe(false);
        expect(isNull(() => { })).toBe(false);
    })
})