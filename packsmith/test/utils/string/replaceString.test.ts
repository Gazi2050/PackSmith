import { replaceString } from 'src';
import { describe, it, expect } from 'vitest';

describe('replaceString', () => {
    it('replaces all dashes with plus signs', () => {
        expect(replaceString('a-b-c', '-', '+')).toBe('a+b+c');
    });

    it('replaces all "a" with "x"', () => {
        expect(replaceString('abcabc', 'a', 'x')).toBe('xbcxbc');
    });

    it('removes "world" from string', () => {
        expect(replaceString('hello world', 'world', '')).toBe('hello ');
    });

    it('returns same string when target not found', () => {
        expect(replaceString('abc', 'd', 'x')).toBe('abc');
    });

    it('returns empty string when value is empty', () => {
        expect(replaceString('', 'a', 'x')).toBe('');
    });

    it('inserts between characters when target is empty', () => {
        expect(replaceString('abc', '', '-')).toBe('-a-b-c-');
    });

    it('returns same string when target equals replacement', () => {
        expect(replaceString('abcabc', 'a', 'a')).toBe('abcabc');
    });
});
