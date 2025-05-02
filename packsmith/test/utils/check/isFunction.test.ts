import { isFunction } from "src";
import { describe, expect, it } from "vitest";

describe('isFunction', () => {
    it('returns true for various function types', () => {
        expect(isFunction(function () { })).toBe(true)
        expect(isFunction(async () => { })).toBe(true)
        expect(isFunction(function* () { })).toBe(true)
        expect(isFunction(() => { })).toBe(true)
    })

    it('returns false for non-functions', () => {
        expect(isFunction(undefined)).toBe(false)
        expect(isFunction(NaN)).toBe(false)
        expect(isFunction(null)).toBe(false)
        expect(isFunction(123)).toBe(false)
        expect(isFunction({})).toBe(false)
        expect(isFunction([])).toBe(false)
        expect(isFunction("func")).toBe(false)
    })

})