import { reverseString } from "src";
import { describe, expect, it } from "vitest";

describe('reverseString', () => {
    it('should return " " for " "', () => {
        expect(reverseString(' ')).toBe(' ');
    });

    it('should return "olleh" for "hello"', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    it('should return "" for empty string', () => {
        expect(reverseString('')).toBe('');
    });

    it('should handle single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    it('should handle string with spaces', () => {
        expect(reverseString('hi there')).toBe('ereht ih');
    });

    it('should handle emojis', () => {
        expect(reverseString('👋🌍')).toBe('🌍👋');
    });
});
