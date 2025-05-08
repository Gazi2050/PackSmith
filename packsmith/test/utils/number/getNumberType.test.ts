import { describe, it, expect } from 'vitest';
import { getNumberType } from 'src';

describe('getNumberType', () => {
    it('returns "integer" for whole numbers', () => {
        expect(getNumberType(5)).toBe('integer');
    });

    it('returns "float" for decimal numbers', () => {
        expect(getNumberType(5.5)).toBe('float');
    });

    it('returns null for non-finite numbers', () => {
        expect(getNumberType(NaN)).toBe(null);
        expect(getNumberType(Infinity)).toBe(null);
        expect(getNumberType(-Infinity)).toBe(null);
    });
});
