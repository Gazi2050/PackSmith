import { isBoolean } from "src";
import { describe, expect, it } from "vitest";

describe('isBoolean', () => {
    it('returns true for booleans', () => {
        expect(isBoolean(true)).toBe(true)
        expect(isBoolean(false)).toBe(true)
    })
    it('returns false for non-booleans', () => {
        expect(isBoolean(NaN)).toBe(false)
        expect(isBoolean(null)).toBe(false)
        expect(isBoolean(undefined)).toBe(false)
        expect(isBoolean('packsmith')).toBe(false)
        expect(isBoolean(123)).toBe(false)
        expect(isBoolean([])).toBe(false)
        expect(isBoolean({})).toBe(false)
        expect(isBoolean(() => { })).toBe(false)
    })
})