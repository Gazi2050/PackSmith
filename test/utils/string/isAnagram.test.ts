import { isAnagram } from 'src';
import { describe, it, expect } from 'vitest';

describe('isAnagram', () => {

    it('should return true for "listen" and "silent"', () => {
        expect(isAnagram("listen", "silent")).toBe(true);
    });

    it('should return true for "triangle" and "integral"', () => {
        expect(isAnagram("triangle", "integral")).toBe(true);
    });

    it('should return false for "apple" and "pale"', () => {
        expect(isAnagram("apple", "pale")).toBe(false);
    });

    it('should return true for two empty strings', () => {
        expect(isAnagram("", "")).toBe(true);
    });

    it('should return false for "rat" and "car"', () => {
        expect(isAnagram("rat", "car")).toBe(false);
    });

    it('should return true for "Anagram" and "nagaram"', () => {
        expect(isAnagram("Anagram", "nagaram")).toBe(true);
    });

    it('should return true for "Hello, World!" and "dlroW olleH"', () => {
        expect(isAnagram("Hello, World!", "dlroW olleH")).toBe(true);
    });

});
