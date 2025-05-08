import { isString } from "src";
import { describe, expect, it } from "vitest";

describe('isString', () => {
    it('return true for strings', () => {
        expect(isString('')).toBe(true)
        expect(isString('packsmith')).toBe(true)
    })
    it('return false for non-strings', () => {
        expect(isString(123)).toBe(false)
        expect(isString(true)).toBe(false)
        expect(isString(null)).toBe(false)
        expect(isString(undefined)).toBe(false)
        expect(isString([])).toBe(false)
        expect(isString({})).toBe(false)
        expect(isString(() => { })).toBe(false)
    })
})