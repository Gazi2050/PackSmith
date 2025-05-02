import { isObject } from "src";
import { describe, expect, it } from "vitest";

const testObject = {
    name: 'packSmith',
    version: '0.0.1'
}
describe('isObject', () => {
    it('return true for objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject(testObject)).toBe(true);
    });

    it('returns false for non-objects', () => {
        expect(isObject([])).toBe(false);
        expect(isObject('string')).toBe(false);
        expect(isObject(123)).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(() => { })).toBe(false);
    })
})