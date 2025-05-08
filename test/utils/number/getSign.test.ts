import { getSign } from 'src';
import { describe, it, expect } from 'vitest';

describe('getSign', () => {
    it('returns "positive" for positive numbers', () => {
        expect(getSign(5)).toBe('positive');
    });

    it('returns "negative" for negative numbers', () => {
        expect(getSign(-5)).toBe('negative');
    });

    it('returns "zero" for zero', () => {
        expect(getSign(0)).toBe('zero');
    });

    it('returns NaN for NaN', () => {
        expect(getSign(NaN)).toBe(NaN);
    });
});
