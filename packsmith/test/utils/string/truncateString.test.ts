import { truncateString } from 'src';
import { describe, it, expect } from 'vitest';

describe('truncateString', () => {
    it('should return "Hello..." for "Hello, World!" and length 5', () => {
        expect(truncateString("Hello, World!", 5)).toBe("Hello...");
    });

    it('should return "Hi" for "Hi" and length 5', () => {
        expect(truncateString("Hi", 5)).toBe("Hi");
    });

    it('should throw error for length 0', () => {
        expect(() => truncateString("Test", 0)).toThrow("Length must be greater than 0");
    });

    it('should throw error for negative length', () => {
        expect(() => truncateString("Test", -3)).toThrow("Length must be greater than 0");
    });
});
