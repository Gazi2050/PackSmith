import { isInRange } from 'src';
import { describe, it, expect } from 'vitest';

describe('isInRange', () => {
    it('returns true if value is within range (inclusive)', () => {
        expect(isInRange(5, 1, 10)).toBe(true);
        expect(isInRange(1, 1, 10)).toBe(true);
        expect(isInRange(10, 1, 10)).toBe(true);
    });

    it('returns false if value is outside the range', () => {
        expect(isInRange(0, 1, 10)).toBe(false);
        expect(isInRange(11, 1, 10)).toBe(false);
    });
});
