import { isNumber } from "src";
import { describe, expect, it } from "vitest";

describe('isNumber', () => {
    it('return true for numbers', () => {
        expect(isNumber(0)).toBe(true)
        expect(isNumber(123)).toBe(true)
        expect(isNumber(12.3)).toBe(true)
    })
    it('return false for non-numbers', () => {
        expect(isNumber(NaN)).toBe(false)
        expect(isNumber(null)).toBe(false)
        expect(isNumber(undefined)).toBe(false)
        expect(isNumber(12n)).toBe(false)
        expect(isNumber('12')).toBe(false)
        expect(isNumber({})).toBe(false)
        expect(isNumber([])).toBe(false)
        expect(isNumber(() => { })).toBe(false)
    })
})