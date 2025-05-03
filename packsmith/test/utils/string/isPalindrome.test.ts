import { isPalindrome } from 'src';
import { describe, it, expect } from 'vitest';


describe('isPalindrome', () => {
    it('should return true for "eye"', () => {
        expect(isPalindrome("eye")).toBe(true);
    });

    it('should return false for "hello"', () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    it('should return true for "A man, a plan, a canal: Panama"', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it('should return true for an empty string', () => {
        expect(isPalindrome("")).toBe(true);
    });

    it('should return false for "😊developer😊"', () => {
        expect(isPalindrome("😊developer😊")).toBe(false);
    });
});
