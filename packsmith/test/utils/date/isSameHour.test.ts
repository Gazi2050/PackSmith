import { isSameHour } from 'src';
import { describe, it, expect } from 'vitest';
describe('isSameHour', () => {
    it('returns true for dates in the same hour', () => {
        const d1 = new Date('2023-05-01T12:30:00');
        const d2 = new Date('2023-05-01T12:59:59');
        expect(isSameHour(d1, d2)).toBe(true);
    });

    it('returns false for dates in different hours', () => {
        const d1 = new Date('2023-05-01T12:59:59');
        const d2 = new Date('2023-05-01T13:00:00');
        expect(isSameHour(d1, d2)).toBe(false);
    });

    it('returns false for dates on different days', () => {
        const d1 = new Date('2023-05-01T12:00:00');
        const d2 = new Date('2024-05-02T12:00:00');
        expect(isSameHour(d1, d2)).toBe(false);
    });

    it('returns false for invalid dates', () => {
        const d1 = new Date('invalid');
        const d2 = new Date('2023-05-01T12:00:00');
        expect(isSameHour(d1, d2)).toBe(false);
    });
});
