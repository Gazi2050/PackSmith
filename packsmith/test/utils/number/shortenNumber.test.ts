import { shortenNumber } from 'src';
import { describe, it, expect } from 'vitest';

describe('shortenNumber', () => {
    it('formats thousands as "k" with one decimal place', () => {
        expect(shortenNumber(2500)).toBe('2.5k');
        expect(shortenNumber(999)).toBe('999');
    });

    it('formats millions as "m" with one decimal place', () => {
        expect(shortenNumber(1_200_000)).toBe('1.2m');
        expect(shortenNumber(999_000)).toBe('999k');
    });

    it('formats billions as "b" with one decimal place', () => {
        expect(shortenNumber(3_000_000_000)).toBe('3b');
        expect(shortenNumber(3_500_000_000)).toBe('3.5b');
    });

    it('returns "0" for invalid or zero values', () => {
        expect(shortenNumber(0)).toBe('0');
        expect(shortenNumber(NaN)).toBe('not a valid number');
        expect(shortenNumber(Infinity)).toBe('infinity');
        expect(shortenNumber(-Infinity)).toBe('infinity');
    });
});
